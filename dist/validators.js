"use strict";
exports.__esModule = true;
exports.validateSearchOfCategory = exports.validateIdProvider = exports.providerValidate = exports.validateGetProducts = exports.productValidationRules = exports.checkForErrors = void 0;
var express_validator_1 = require("express-validator");
var simpleVadationResult = express_validator_1.validationResult.withDefaults({
    formatter: function (err) { return err.msg; }
});
var checkForErrors = function (req, res, next) {
    var errors = simpleVadationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.mapped());
    }
    next();
};
exports.checkForErrors = checkForErrors;
exports.productValidationRules = [
    express_validator_1.body("QuantityPerUnit")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("QuantityPerUnit must not be empty"),
    express_validator_1.body("ProductName")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("ProductName must not be empty")
        .isString()
        .withMessage("The productName must be an string"),
    express_validator_1.body("UnitPrice")
        .isLength({ min: 1 })
        .withMessage("UnitPrice must not be empty")
        .isDecimal()
        .withMessage("UnitPrice must be a decimal"),
    express_validator_1.body("UnitsInStock")
        .isLength({ min: 1 })
        .withMessage("UnitsInStock must not be empty")
        .isInt()
        .withMessage("UnitsInStock must be a integer"),
    express_validator_1.body("UnitsOnOrder")
        .isLength({ min: 1 })
        .withMessage("UnitsOnOrder must not be empty")
        .isInt()
        .withMessage("UnitsOnOrder must be a integer"),
    express_validator_1.body("ReorderLevel")
        .isLength({ min: 1 })
        .withMessage("ReorderLevel must not be empty")
        .isInt()
        .withMessage("ReorderLevel must be a integer"),
    express_validator_1.body("Discontinued")
        .isLength({ min: 1 })
        .withMessage("Discontinued must not be empty")
        .isString()
        .withMessage("Discontinued must be an string"),
    express_validator_1.body("SupplierID")
        .isLength({ min: 1 })
        .withMessage("SupplierID must not be empty"),
    express_validator_1.body("CategoryID")
        .isLength({ min: 1 })
        .withMessage("CategoryID must not be empty"),
];
exports.validateGetProducts = [
    express_validator_1.body("pagina")
        .isLength({ min: 1 })
        .withMessage("Select the page of the data"),
    express_validator_1.body("tamaño_pagina")
        .isLength({ min: 1 })
        .withMessage("Select the length of the data"),
];
exports.providerValidate = [
    express_validator_1.body("CompanyName")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("CompanyName must not be empty")
        .isString()
        .withMessage("The CompanyName must be an string"),
    express_validator_1.body("ContactName")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("ContactName must not be empty")
        .isString()
        .withMessage("The ContactName must be an string"),
    express_validator_1.body("ContactTitle")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("ContactTitle must not be empty")
        .isString()
        .withMessage("The ContactTitle must be an string"),
    express_validator_1.body("Address")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("Address must not be empty")
        .isString()
        .withMessage("The Address must be an string"),
    express_validator_1.body("City")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("City must not be empty")
        .isString()
        .withMessage("The City must be an string"),
    express_validator_1.body("Region")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("Region must not be empty")
        .isString()
        .withMessage("The Region must be an string"),
    express_validator_1.body("PostalCode")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("PostalCode must not be empty")
        .isString()
        .withMessage("The PostalCode must be an string"),
    express_validator_1.body("Country")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("Country must not be empty")
        .isString()
        .withMessage("The Country must be an string"),
    express_validator_1.body("Phone")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("Phone must not be empty")
        .isString()
        .withMessage("The Phone must be an string"),
    express_validator_1.body("Fax")
        .not()
        .isEmpty()
        .trim()
        .escape()
        .withMessage("Fax must not be empty")
        .isString()
        .withMessage("The Fax must be an string"),
];
exports.validateIdProvider = [
    express_validator_1.body("id_proveedor")
        .not()
        .isEmpty()
        .withMessage("The providerID must not be empty")
        .isInt()
        .withMessage("The providerID must be an integer"),
];
exports.validateSearchOfCategory = [
    express_validator_1.body("pagina")
        .isLength({ min: 1 })
        .withMessage("Select the page of the data"),
    express_validator_1.body("tamaño_pagina")
        .isLength({ min: 1 })
        .withMessage("Select the length of the data"),
    express_validator_1.body("categoria_id")
        .not()
        .isEmpty()
        .withMessage("The categoryID must not be empty")
        .isInt()
        .withMessage("The categiryID must be an integer"),
];
//# sourceMappingURL=validators.js.map