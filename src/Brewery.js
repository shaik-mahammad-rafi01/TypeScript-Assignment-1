"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var products = [
    { name: "Almond milk", price: 150, type: "vegan", category: "Beverages" },
    { name: "Coffee", price: 180, type: "vegetarian", category: "Beverages" },
    { name: "cake", price: 120, type: "vegetarian", category: "Desserts" },
    { name: "checken wings", price: 250, type: "non-vegetarian", category: "Snacks" },
    { name: "Lemone juice", price: 100, type: "vegan", category: "Beverages" },
    { name: "laddu", price: 90, type: "vegetarian", category: "Sweets" },
    { name: "Paneer curry", price: 200, type: "vegetarian", category: "Snacks" },
];
// Taking input from user: 
var input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ask(question) {
    return new Promise(function (resolve) { return input.question(question, resolve); });
}
function startBilling() {
    return __awaiter(this, void 0, void 0, function () {
        var selectedItems, _loop_1, state_1, total, discount, Paid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Welcome to Brewery!\n");
                    console.log('Available Products in our Restarant :\n\n');
                    products.forEach(function (p) {
                        console.log("- ".concat(p.name, " | \u20B9").concat(p.price, " | ").concat(p.type, " | ").concat(p.category));
                    });
                    selectedItems = [];
                    _loop_1 = function () {
                        var name_1, product, EnteredQuantity, quantity, cupsize, size, moreItems;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, ask("\nEnter the product name:  ")];
                                case 1:
                                    name_1 = (_b.sent()).trim();
                                    if (name_1.toLowerCase() === "done")
                                        return [2 /*return*/, "break"];
                                    product = products.find(function (p) { return p.name.toLowerCase() === name_1.toLowerCase(); });
                                    if (!product) {
                                        console.log("searched product is not available. try again");
                                        return [2 /*return*/, "continue"];
                                    }
                                    return [4 /*yield*/, ask("Enter the quantity :  ")];
                                case 2:
                                    EnteredQuantity = _b.sent();
                                    quantity = parseInt(EnteredQuantity);
                                    if (isNaN(quantity)) {
                                        console.log("Enter atleast one !");
                                        return [2 /*return*/, "continue"];
                                    }
                                    cupsize = void 0;
                                    if (!(product.category === "Beverages")) return [3 /*break*/, 4];
                                    return [4 /*yield*/, ask("Enter the cupsize you want :  ")];
                                case 3:
                                    size = (_b.sent()).trim();
                                    if (!["small", "medium", "large"].includes(size)) {
                                        console.log("This cupsize in not available,so default size is small");
                                        cupsize = "small";
                                    }
                                    else {
                                        cupsize = size;
                                    }
                                    _b.label = 4;
                                case 4:
                                    selectedItems.push({ product: product, quantity: quantity, cupsize: cupsize });
                                    return [4 /*yield*/, ask("want to add another products :  ")];
                                case 5:
                                    moreItems = (_b.sent()).trim();
                                    if (moreItems === "yes") {
                                        return [2 /*return*/, "continue"];
                                    }
                                    else {
                                        return [2 /*return*/, "break"];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [5 /*yield**/, _loop_1()];
                case 2:
                    state_1 = _a.sent();
                    if (state_1 === "break")
                        return [3 /*break*/, 3];
                    return [3 /*break*/, 1];
                case 3:
                    // billing calculation part of code 
                    console.log("Final bill for All Products");
                    total = 0;
                    discount = 0;
                    selectedItems.forEach(function (item) {
                        var product = item.product, quantity = item.quantity;
                        var itemTotal = product.price * quantity;
                        total += itemTotal;
                        console.log("Total cost : " + total);
                    });
                    if (total > 1000) {
                        discount = total * 0.1;
                        total -= discount;
                        console.log("Discount is applied (10% off for if bill > 1000)");
                    }
                    console.log("\n Total Payable Amount : ".concat(total));
                    return [4 /*yield*/, ask("Paid? (Yes/No) : ")];
                case 4:
                    Paid = (_a.sent()).trim().toLowerCase();
                    if (Paid === "yes") {
                        console.log("Ready for Next Customer.\n");
                        return [2 /*return*/, startBilling()];
                    }
                    else {
                        console.log("Exits. Thank You Visit Next-Time...");
                        input.close();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
startBilling();
