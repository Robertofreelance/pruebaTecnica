import { prisma } from "../app";
import { Request, Response } from "express";

export const CategorySearchProductController = async (
  req: Request,
  res: Response
) => {
  const { categoria_id: CategoryID, pagina, tamañoDePagina } = req.body;

  try {
    const categories = await prisma.categories.findUnique({
      where: {
        CategoryID,
      },
      select: {
        CategoryID: true,
        CategoryName: true,
        Description: true,
        Picture: true,
        products_categoriesToproducts_CategoryID: {
          skip: pagina * tamañoDePagina,
          take: tamañoDePagina,
        },
      },
    });
    if (!categories) {
      return res.status(404).json({ error: "Category not found" });
    }
    if (categories.products_categoriesToproducts_CategoryID.length < 1) {
      return res.json({
        ...categories,
        products_categoriesToproducts_CategoryID: "Not data in this page",
      });
    }

    return res.json(categories);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
