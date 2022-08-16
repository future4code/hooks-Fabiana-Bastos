"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
//EXERCÍCIO 1
var app = (0, express_1["default"])();
app.listen(3003, function () {
    console.log('Hi there!');
});
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
app.get('/', function (request, response) {
    response.send('Bem vinde!');
});
app.get('/documentation', function (request, response) {
    response.send('Alô alô Brasil');
});
app.get('/about', function (request, response) {
    response.send('Me chamo Fabiana');
});
//EXERCÍCIO 3
var users = [
    { id: 1, name: "Bethânia", phone: 12345678, email: "bet@gmail.com", website: "bet.com.br" },
    { id: 2, name: "Caetano", phone: 87654321, email: "cae@gmail.com", website: "cae.com.br" },
    { id: 3, name: "Gilberto", phone: 10101010, email: "gil@gmail.com", website: "gil.com.br" },
    { id: 4, name: "Gal", phone: 74758566, email: "gal@gmail.com", website: "gal.com.br" },
    { id: 5, name: "Rita", phone: 5556666, email: "riri@gmail.com", website: "riri.com.br" },
];
console.log(users[1].name);
//EXERCICIO 4
app.get("/users", function (req, res) {
    if (!users.length) {
        res.status(401).send("Vazio");
    }
    res.status(201).send(users);
    console.log("a", users);
});
//EXERCICIO 6
var postsData = [
    { id: 1, title: "abc", body: "óh abelha rainha", userId: 1 },
    { id: 2, title: "def", body: "faz de mim", userId: 1 },
    { id: 3, title: "ghi", body: "um instrumento de", userId: 1 },
    { id: 4, title: "klm", body: "teu prazer, sim, sim", userId: 2 },
    { id: 5, title: "nop", body: "e de tua glória", userId: 2 },
];
// EXERCICIO 7
app.get("/posts", function (req, res) {
    if (!postsData.length) {
        res.status(401).send("Vazio");
    }
    res.status(201).send(postsData);
    console.log("b", postsData);
});
// EXERCICIO 8
app.get("/users/posts", function (req, res) {
    if (req.query.userId) {
        console.log(req.query);
        var filteredId = postsData.filter(function (prop) {
            return prop.userId === Number(req.query.userId);
        });
        res.status(201).send(filteredId);
    }
    else {
        res.status(400).end();
    }
});
