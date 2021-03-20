import { PrismaClient } from "@prisma/client";
import express from "express";

import {
  ProductGetController,
  ProductPostCreatorController,
  ProductSearchController,
} from "./Controllers/Products";
import {
  ProviderDeleteController,
  ProviderGetProductsByIdOrNameController,
  ProviderGetProductsController,
  ProviderPostController,
} from "./Controllers/Providers";
import {
  checkForErrors,
  productValidationRules,
  providerValidate,
  validateGetProducts,
  validateIdProvider,
  validateSearchOfCategory,
} from "./validators";
import {
  CategorySearchProductController
} from "./Controllers/Categories";

export const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post(
  "/api/products",
  productValidationRules,
  checkForErrors,
  ProductPostCreatorController
);

app.get(
  "/api/products",
  validateGetProducts,
  checkForErrors,
  ProductGetController
);

app.get(
  "/api/providers",
  validateIdProvider,
  checkForErrors,
  ProviderGetProductsController
);

app.get(
  "/api/providers/products",
  validateIdProvider,
  checkForErrors,
  ProviderGetProductsByIdOrNameController
);

app.get("/api/products/search", ProductSearchController);

app.post(
  "/api/providers",
  providerValidate,
  checkForErrors,
  ProviderPostController
);

app.delete(
  "/api/providers/id",
  validateIdProvider,
  checkForErrors,
  ProviderDeleteController
);

app.get(
  "/api/categories/id/products",
  validateSearchOfCategory,
  checkForErrors,
  CategorySearchProductController
)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
