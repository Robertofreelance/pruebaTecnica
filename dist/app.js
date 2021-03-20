"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.prisma = void 0;
var client_1 = require("@prisma/client");
var express_1 = __importDefault(require("express"));
var Products_1 = require("./Controllers/Products");
var Providers_1 = require("./Controllers/Providers");
var validators_1 = require("./validators");
var Categories_1 = require("./Controllers/Categories");
exports.prisma = new client_1.PrismaClient();
var app = express_1["default"]();
app.use(express_1["default"].json());
app.post("/api/products", validators_1.productValidationRules, validators_1.checkForErrors, Products_1.ProductPostCreatorController);
app.get("/api/products", validators_1.validateGetProducts, validators_1.checkForErrors, Products_1.ProductGetController);
app.get("/api/providers", validators_1.validateIdProvider, validators_1.checkForErrors, Providers_1.ProviderGetProductsController);
app.get("/api/providers/products", validators_1.validateIdProvider, validators_1.checkForErrors, Providers_1.ProviderGetProductsByIdOrNameController);
app.get("/api/products/search", Products_1.ProductSearchController);
app.post("/api/providers", validators_1.providerValidate, validators_1.checkForErrors, Providers_1.ProviderPostController);
app["delete"]("/api/providers/id", validators_1.validateIdProvider, validators_1.checkForErrors, Providers_1.ProviderDeleteController);
app.get("/api/categories/id/products", validators_1.validateSearchOfCategory, validators_1.checkForErrors, Categories_1.CategorySearchProductController);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () { return console.log("Server running at " + PORT); });
//# sourceMappingURL=app.js.map