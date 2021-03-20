import { prisma } from "../app";
import { Request, Response } from "express";

export const ProductSearchController = async (req: Request, res: Response) => {
  const { categoria, nombre_producto, pagina, tamaño_pagina } = req.body;

  try {
    const products = await prisma.products.findMany({
      where: {
        
        OR: [
          {
            ProductName: {
              contains: nombre_producto
            },
            
          },
          {
            category: {
              CategoryName: categoria,
            },
          },
        ],
      },
      select: {
        CategoryID: true,
        Discontinued: true,
        ProductID: true,
        ProductName: true,
        QuantityPerUnit: true,
        ReorderLevel: true,
        SupplierID: true,
        UnitPrice: true,
        UnitsInStock: true,
        UnitsOnOrder: true,
        category: {
          select: {
            CategoryID: true,
            Description: true,
            Picture: true,
            CategoryName: true,
          },
        },
      },
      skip: pagina * tamaño_pagina,
      take: tamaño_pagina,
    });
    if (products.length === 0) {
      return res.status(404).json({ error: "Name and category not found or not data in this page" });
    }

    return res.json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const ProductGetController = async (req: Request, res: Response) => {
  const { pagina, tamaño_pagina } = req.body;

  try {
    const products = await prisma.products.findMany({
      select: {
        CategoryID: true,
        Discontinued: true,
        ProductID: true,
        ProductName: true,
        QuantityPerUnit: true,
        ReorderLevel: true,
        SupplierID: true,
        UnitPrice: true,
        UnitsInStock: true,
        UnitsOnOrder: true,
        category: {
          select: {
            CategoryID: true,
            Description: true,
            Picture: true,
            CategoryName: true,
          },
        },
      },
      skip: pagina * tamaño_pagina,
      take: tamaño_pagina,
    });

    return res.json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const ProductPostCreatorController =  async (req: Request, res: Response) => {
    const { SupplierID, CategoryID } = req.body;

    try {
      const existingSupplier = await prisma.suppliers.findFirst({
        where: { SupplierID },
      });
      if (!existingSupplier) throw { Supplier: "Supplier doesn't exist" };
      const existingCategory = await prisma.categories.findFirst({
        where: { CategoryID },
      });
      if (!existingCategory) throw { Category: "Category don't exist" };

      const product = await prisma.products.create({
        data: {
          ...req.body,
        },
      });

      return res.json(product);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  }