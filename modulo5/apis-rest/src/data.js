"use strict";
exports.__esModule = true;
exports.users = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "ADMIN";
    UserType["NORMAL"] = "NORMAL";
})(UserType = exports.UserType || (exports.UserType = {}));
exports.users = [
    {
        id: 1,
        name: "Maria",
        email: "maria@email.com",
        type: UserType.ADMIN,
        age: 10
    },
    {
        id: 2,
        name: "João",
        email: "joao@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Monique",
        email: "monique@email.com",
        type: UserType.NORMAL,
        age: 34
    },
    {
        id: 4,
        name: "Fabiana",
        email: "fabiana@email.com",
        type: UserType.NORMAL,
        age: 29
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 26
    },
    {
        id: 6,
        name: "Augusta",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 66
    }
];
