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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertUser = (username, password, firstname, lastname, email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.todoUser.create({
            data: {
                username,
                password,
                firstname,
                lastname,
                email
            }
        });
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
});
// insertUser("rahul_2", "rae312","rahul","dravid","rahul@gmail.com");
const getUserData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.todoUser.findUnique({
            where: {
                email: "rahul@gmail.com"
            }
        });
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
});
// getUserData();
const udpdateUserData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma.todoUser.update({
            where: {
                email: "rahul@gmail.com"
            },
            data: {
                email: "rahuldravid@gmail.com"
            }
        });
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
});
// udpdateUserData();
const addTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma.todoTable.create({
            data: {
                title: "Learn Prisma",
                description: "Learn the complete Prisma ORM",
                userId: 1
            }
        });
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
});
// addTodo();
const getTodaandUserData = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const userId : number = 1;
        const response = yield prisma.todoTable.findMany({
            where: {
                userId: userId,
            },
            select: {
                title: true,
                description: true,
                user: true
            }
        });
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
});
getTodaandUserData(1);
