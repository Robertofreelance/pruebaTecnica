import { prisma } from "../app";
import { Request, Response } from "express";

export const ProviderPostController = async (req: Request, res: Response) => {
  try {
    const existingName = await prisma.suppliers.findFirst({
      where: { ContactName: req.body.ContactName },
    });
    if (existingName) {
      return res.status(400).json({ err: "You have been already register" });
    }
    const provider = await prisma.suppliers.create({
      data: {
        ...req.body,
      },
    });

    return res.json(provider);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const ProviderGetProductsController = async (
  req: Request,
  res: Response
) => {
  const { id_proveedor } = req.body;

  try {
    const provider = await prisma.suppliers.findUnique({
      where: { SupplierID: id_proveedor },
    });

    if (!provider) {
      return res.status(404).json({ error: "Provider not found" });
    }

    return res.json(provider);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const ProviderGetProductsByIdOrNameController = async (
  req: Request,
  res: Response
) => {
  const { id_proveedor, id_producto } = req.body;
  console.log(req.body);
  console.log(id_proveedor);

  try {
    if (id_producto) {
      const product = await prisma.products.findMany({
        where: {
          ProductID: id_producto,
          AND: [
            {
              SupplierID: id_proveedor,
            },
          ],
        },
        select: {
          ProductID: true,
          ProductName: true,
          CategoryID: true,
          SupplierID: true,
          category: true,
          supplier: true,
        },
      });
      if (product.length > 0) {
        return res.json(product);
      } else {
        return res.status(404).json({
          error: "This product have't been supplied by the provider",
        });
      }
    }
    const provider = await prisma.products.findMany({
      where: {
        SupplierID: id_proveedor,
      },
      select: {
        ProductID: true,
        ProductName: true,
        CategoryID: true,
        SupplierID: true,
        category: true,
        supplier: true,
      },
    });

    if (provider.length === 0) {
      return res.status(404).json({ error: "Information not found" });
    }

    return res.json(provider);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const ProviderDeleteController = async (req: Request, res: Response) => {
  const { id_proveedor } = req.body;

  try {
    const ifExist = await prisma.suppliers.findUnique({
      where: { SupplierID: id_proveedor },
    });
    if (!ifExist) {
      return res.status(404).json({error: "The provider doesn't exist"})
    } 
    const provider = await prisma.suppliers.delete({
      where: { SupplierID: id_proveedor },
    });

    return res.json({ ...provider, deleted: "Sucessfully deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
