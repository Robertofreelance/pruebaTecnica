"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ProductPostCreatorController = exports.ProductGetController = exports.ProductSearchController = void 0;
var app_1 = require("../app");
var ProductSearchController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, categoria, nombre_producto, pagina, tama??o_pagina, products, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, categoria = _a.categoria, nombre_producto = _a.nombre_producto, pagina = _a.pagina, tama??o_pagina = _a.tama??o_pagina;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, app_1.prisma.products.findMany({
                        where: {
                            OR: [
                                {
                                    ProductName: {
                                        contains: nombre_producto
                                    }
                                },
                                {
                                    category: {
                                        CategoryName: categoria
                                    }
                                },
                            ]
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
                                    CategoryName: true
                                }
                            }
                        },
                        skip: pagina * tama??o_pagina,
                        take: tama??o_pagina
                    })];
            case 2:
                products = _b.sent();
                if (products.length === 0) {
                    return [2 /*return*/, res.status(404).json({ error: "Name and category not found or not data in this page" })];
                }
                return [2 /*return*/, res.json(products)];
            case 3:
                err_1 = _b.sent();
                console.log(err_1);
                return [2 /*return*/, res.status(500).json({ error: "Something went wrong" })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.ProductSearchController = ProductSearchController;
var ProductGetController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, pagina, tama??o_pagina, products, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, pagina = _a.pagina, tama??o_pagina = _a.tama??o_pagina;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, app_1.prisma.products.findMany({
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
                                    CategoryName: true
                                }
                            }
                        },
                        skip: pagina * tama??o_pagina,
                        take: tama??o_pagina
                    })];
            case 2:
                products = _b.sent();
                return [2 /*return*/, res.json(products)];
            case 3:
                err_2 = _b.sent();
                console.log(err_2);
                return [2 /*return*/, res.status(500).json({ error: "Something went wrong" })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.ProductGetController = ProductGetController;
var ProductPostCreatorController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, SupplierID, CategoryID, existingSupplier, existingCategory, product, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, SupplierID = _a.SupplierID, CategoryID = _a.CategoryID;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, app_1.prisma.suppliers.findFirst({
                        where: { SupplierID: SupplierID }
                    })];
            case 2:
                existingSupplier = _b.sent();
                if (!existingSupplier)
                    throw { Supplier: "Supplier doesn't exist" };
                return [4 /*yield*/, app_1.prisma.categories.findFirst({
                        where: { CategoryID: CategoryID }
                    })];
            case 3:
                existingCategory = _b.sent();
                if (!existingCategory)
                    throw { Category: "Category don't exist" };
                return [4 /*yield*/, app_1.prisma.products.create({
                        data: __assign({}, req.body)
                    })];
            case 4:
                product = _b.sent();
                return [2 /*return*/, res.json(product)];
            case 5:
                err_3 = _b.sent();
                console.log(err_3);
                return [2 /*return*/, res.status(400).json(err_3)];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.ProductPostCreatorController = ProductPostCreatorController;
//# sourceMappingURL=Products.js.map