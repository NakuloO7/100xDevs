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
//this is similar to importing  mongoose
//create a user
const createUser = (email, firstName, lastName, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                password
            }
        });
        console.log("User created successfully", result, result.id);
    }
    catch (e) {
        console.log("There is an error in this code", e);
    }
});
//udpatind the user 
const updateUser = (email_1, _a) => __awaiter(void 0, [email_1, _a], void 0, function* (email, { firstName, lastName }) {
    try {
        const result = yield prisma.user.update({
            where: { email },
            data: {
                firstName,
                lastName
            }
        });
        console.log("User updated successfully", result);
    }
    catch (e) {
        console.log("There is an error in this code", e);
    }
});
// updateUser("neha@gmail.com", {
//     firstName : "sneha",
//     lastName : "Varma"
// });
//function to delete the user
const deleteUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.user.delete({
            where: { email: email }
        });
        console.log("user deleted successfully", result);
    }
    catch (e) {
        console.log("There is an error in this code", e);
    }
});
// deleteUser("neha@gmail.com");
//function to get data
const getUserData = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.user.findUnique({
            where: { email }
        });
        console.log("The user found", result);
    }
    catch (e) {
        console.log("There is an error in this code", e);
    }
});
getUserData("tirtha@gmail.com");
//function to create a todo
// async function createTodo(){
//     try{
//         const result = await prisma.todo.create{
//         }
//     }
// }
