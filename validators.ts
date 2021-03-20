import { body, validationResult } from "express-validator";

import { Request, Response, NextFunction } from "express";

const simpleVadationResult = validationResult.withDefaults({
  formatter: (err) => err.msg,
});

export const checkForErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = simpleVadationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.mapped());
  }
  next();
};

export const productValidationRules = [
  body("QuantityPerUnit")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("QuantityPerUnit must not be empty"),
  body("ProductName")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("ProductName must not be empty")
    .isString()
    .withMessage("The productName must be an string"),
  body("UnitPrice")
    .isLength({ min: 1 })
    .withMessage("UnitPrice must not be empty")
    .isDecimal()
    .withMessage("UnitPrice must be a decimal"),
  body("UnitsInStock")
    .isLength({ min: 1 })
    .withMessage("UnitsInStock must not be empty")
    .isInt()
    .withMessage("UnitsInStock must be a integer"),
  body("UnitsOnOrder")
    .isLength({ min: 1 })
    .withMessage("UnitsOnOrder must not be empty")
    .isInt()
    .withMessage("UnitsOnOrder must be a integer"),
  body("ReorderLevel")
    .isLength({ min: 1 })
    .withMessage("ReorderLevel must not be empty")
    .isInt()
    .withMessage("ReorderLevel must be a integer"),
  body("Discontinued")
    .isLength({ min: 1 })
    .withMessage("Discontinued must not be empty")
    .isString()
    .withMessage("Discontinued must be an string"),
  body("SupplierID")
    .isLength({ min: 1 })
    .withMessage("SupplierID must not be empty"),
  body("CategoryID")
    .isLength({ min: 1 })
    .withMessage("CategoryID must not be empty"),
];

export const validateGetProducts = [
  body("pagina")
    .isLength({ min: 1 })
    .withMessage("Select the page of the data"),
  body("tamaño_pagina")
    .isLength({ min: 1 })
    .withMessage("Select the length of the data"),
];

export const providerValidate = [
  body("CompanyName")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("CompanyName must not be empty")
    .isString()
    .withMessage("The CompanyName must be an string"),
  body("ContactName")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("ContactName must not be empty")
    .isString()
    .withMessage("The ContactName must be an string"),
  body("ContactTitle")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("ContactTitle must not be empty")
    .isString()
    .withMessage("The ContactTitle must be an string"),
  body("Address")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("Address must not be empty")
    .isString()
    .withMessage("The Address must be an string"),
  body("City")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("City must not be empty")
    .isString()
    .withMessage("The City must be an string"),
  body("Region")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("Region must not be empty")
    .isString()
    .withMessage("The Region must be an string"),
  body("PostalCode")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("PostalCode must not be empty")
    .isString()
    .withMessage("The PostalCode must be an string"),
  body("Country")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("Country must not be empty")
    .isString()
    .withMessage("The Country must be an string"),
  body("Phone")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("Phone must not be empty")
    .isString()
    .withMessage("The Phone must be an string"),
  body("Fax")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("Fax must not be empty")
    .isString()
    .withMessage("The Fax must be an string"),
];

export const validateIdProvider = [
  body("id_proveedor")
    .not()
    .isEmpty()
    .withMessage("The providerID must not be empty")
    .isInt()
    .withMessage("The providerID must be an integer"),
];

export const validateSearchOfCategory = [
  body("pagina")
    .isLength({ min: 1 })
    .withMessage("Select the page of the data"),
  body("tamaño_pagina")
    .isLength({ min: 1 })
    .withMessage("Select the length of the data"),
    body("categoria_id")
    .not()
    .isEmpty()
    .withMessage("The categoryID must not be empty")
    .isInt()
    .withMessage("The categiryID must be an integer"),
]