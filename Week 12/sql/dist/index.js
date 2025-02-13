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
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable",
});
const createTable = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const result = yield client.query(`
        CREATE TABLE users2 (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result);
});
// createTable();
const insertData = (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const result = yield client.query(`
            INSERT INTO users2 (username, email, password) 
VALUES ($1, $2, $3);
            `, [username, email, password]);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
});
// insertData("tirtha", "tirtha@gmail.com", "tir231");
//updateTable
const updateData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        client.connect();
        const result = yield client.query(`
            UPDATE users2
SET username = 'nehaa' 
WHERE email = 'neha@example.com';
            `);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
});
// updateData();
//delete user
const deleteData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        client.connect();
        const result = client.query(`
            DELETE FROM users2 WHERE id = 2;
            `);
    }
    catch (error) {
        console.log(error);
    }
});
// deleteData();
//Writng the address table
const createAddresTable = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const result = yield client.query(`
            CREATE TABLE addresses2 (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE RESTRICT
            );
            `);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
});
// createAddresTable();
//Inset Address
const insertAddress = (user_id, city, country, street, pincode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const result = yield client.query(`
            INSERT INTO addresses2 (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
            `, [user_id, city, country, street, pincode]);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
});
// insertAddress(2, ' New York', 'USA', '324 Broadway St', '20001');
//Transactoins in SQl
const transactionCode = (username, email, password, city, country, street, pincode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        yield client.query("BEGIN"); //start the transaction
        const result = yield client.query(`
            INSERT INTO users2 (username, email, password) 
            VALUES ($1, $2, $3) RETURNING id;
            `, [username, email, password]);
        const user_id = result.rows[0].id; //way to pass the userid(primary key)
        const result2 = yield client.query(`
            INSERT INTO addresses2 (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
            `, [user_id, city, country, street, pincode]);
        console.log(result);
        console.log(result2);
        yield client.query("COMMIT"); //ending the transaction
    }
    catch (error) {
        console.log(error);
    }
});
// transactionCode(
//   "rihan",
//   "rihan@gmail.com",
//   "rih321",
//   " New York",
//   "USA",
//   "324 Broadway St",
//   "20001"
// );
const getAllData = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const res = yield client.query(`
                SELECT users2.id, users2.username, users2.email, addresses2.city, addresses2.country, addresses2.street, addresses2.pincode
                FROM users2
                JOIN addresses2 ON users2.id = addresses2.user_id
                WHERE users2.id = $1;
            `, [userId]);
        console.log(res.rows[0]);
    }
    catch (error) {
        console.log(error);
    }
});
getAllData(10);
