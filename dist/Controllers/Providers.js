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
exports.ProviderDeleteController = exports.ProviderGetProductsByIdOrNameController = exports.ProviderGetProductsController = exports.ProviderPostController = void 0;
var app_1 = require("../app");
var ProviderPostController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var existingName, provider, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, app_1.prisma.suppliers.findFirst({
                        where: { ContactName: req.body.ContactName }
                    })];
            case 1:
                existingName = _a.sent();
                if (existingName) {
                    return [2 /*return*/, res.status(400).json({ err: "You have been already register" })];
                }
                return [4 /*yield*/, app_1.prisma.suppliers.create({
                        data: __assign({}, req.body)
                    })];
            case 2:
                provider = _a.sent();
                return [2 /*return*/, res.json(provider)];
            case 3:
                err_1 = _a.sent();
                console.log(err_1);
                return [2 /*return*/, res.status(500).json({ error: "Something went wrong" })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.ProviderPostController = ProviderPostController;
var ProviderGetProductsController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id_proveedor, provider, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id_proveedor = req.body.id_proveedor;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, app_1.prisma.suppliers.findUnique({
                        where: { SupplierID: id_proveedor }
                    })];
            case 2:
                provider = _a.sent();
                if (!provider) {
                    return [2 /*return*/, res.status(404).json({ error: "Provider not found" })];
                }
                return [2 /*return*/, res.json(provider)];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                return [2 /*return*/, res.status(500).json({ error: "Something went wrong" })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.ProviderGetProductsController = ProviderGetProductsController;
var ProviderGetProductsByIdOrNameController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id_proveedor, id_producto, product, provider, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id_proveedor = _a.id_proveedor, id_producto = _a.id_producto;
                console.log(req.body);
                console.log(id_proveedor);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                if (!id_producto) return [3 /*break*/, 3];
                return [4 /*yield*/, app_1.prisma.products.findMany({
                        where: {
                            ProductID: id_producto,
                            AND: [
                                {
                                    SupplierID: id_proveedor
                                },
                            ]
                        },
                        select: {
                            ProductID: true,
                            ProductName: true,
                            CategoryID: true,
                            SupplierID: true,
                            category: true,
                            supplier: true
                        }
                    })];
            case 2:
                product = _b.sent();
                if (product.length > 0) {
                    return [2 /*return*/, res.json(product)];
                }
                else {
                    return [2 /*return*/, res.status(404).json({
                            error: "This product have't been supplied by the provider"
                        })];
                }
                _b.label = 3;
            case 3: return [4 /*yield*/, app_1.prisma.products.findMany({
                    where: {
                        SupplierID: id_proveedor
                    },
                    select: {
                        ProductID: true,
                        ProductName: true,
                        CategoryID: true,
                        SupplierID: true,
                        category: true,
                        supplier: true
                    }
                })];
            case 4:
                provider = _b.sent();
                if (provider.length === 0) {
                    return [2 /*return*/, res.status(404).json({ error: "Information not found" })];
                }
                return [2 /*return*/, res.json(provider)];
            case 5:
                err_3 = _b.sent();
                console.log(err_3);
                return [2 /*return*/, res.status(500).json({ error: "Something went wrong" })];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.ProviderGetProductsByIdOrNameController = ProviderGetProductsByIdOrNameController;
var ProviderDeleteController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id_proveedor, ifExist, provider, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id_proveedor = req.body.id_proveedor;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, app_1.prisma.suppliers.findUnique({
                        where: { SupplierID: id_proveedor }
                    })];
            case 2:
                ifExist = _a.sent();
                if (!ifExist) {
                    return [2 /*return*/, res.status(404).json({ error: "The provider doesn't exist" })];
                }
                return [4 /*yield*/, app_1.prisma.suppliers["delete"]({
                        where: { SupplierID: id_proveedor }
                    })];
            case 3:
                provider = _a.sent();
                return [2 /*return*/, res.json(__assign(__assign({}, provider), { deleted: "Sucessfully deleted" }))];
            case 4:
                err_4 = _a.sent();
                console.log(err_4);
                return [2 /*return*/, res.status(500).json({ error: "Something went wrong" })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.ProviderDeleteController = ProviderDeleteController;
//# sourceMappingURL=Providers.js.map