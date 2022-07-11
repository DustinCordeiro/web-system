"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./db"));
var PORT = process.env.PORT || 3001;
//App
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("Hello Wold");
});
app.listen(PORT, function () {
    console.log("app running on port ".concat(PORT));
    db_1.default.runMigrations();
});
