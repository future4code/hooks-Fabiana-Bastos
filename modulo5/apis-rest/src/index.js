"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
console.log("Hello, world!");
var data_1 = require("./data");
var express_1 = require("express");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.get("/ping", function (req, res) {
    res.send("Pong! 🏓");
});
//EXERCICIO 1
app.get("/users", function (req, res) {
    try {
        res.send(data_1.users);
    }
    catch (_a) {
    }
});
//
app.get("/users/:type", function (req, res) {
    var typeParam = req.params.type;
    try {
        var filteredType = data_1.users.filter(function (u) {
            return u.type.toLocaleLowerCase() === typeParam.toLocaleLowerCase();
        });
        res.status(201).send(filteredType);
    }
    catch (error) {
        res.send(error.message);
    }
});
//EXERCICIO 3
app.get("/users/search", function (req, res) {
    try {
        var name_1 = req.query.name;
        var filteredName = data_1.users.filter(function (u) { return u.name === name_1; });
        res.send(filteredName);
        console.log(filteredName);
    }
    catch (e) {
        res.send(e.message);
    }
});
//EXERCICIO 4
app.post("/users", function (req, res) {
    try {
        var _a = req.body, id = _a.id, name_2 = _a.name, email = _a.email, type = _a.type, age = _a.age;
        var newUsers = __spreadArray(__spreadArray([], data_1.users, true), [{ id: id, name: name_2, email: email, type: type, age: age }], false);
        res.send(newUsers);
    }
    catch (e) {
        res.send(e.message);
    }
});
app.get("/users", function (req, res) {
});
var server = app.listen(process.env.PORT || 3003, function () {
    if (server) {
        var address = server.address();
        console.log("Server is running in http://localhost:".concat(address.port));
    }
    else {
        console.error("Failure upon starting server.");
    }
});
;
