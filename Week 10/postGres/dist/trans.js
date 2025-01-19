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
//connecting to your database
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://test_owner:UEpMlTZ8R0xQ@ep-shiny-wildflower-a5kgk6yn.us-east-2.aws.neon.tech/test?sslmode=require",
});
//Understanding Transactions and Joins
const createUserTable = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const result = yield client.query(`
        CREATE TABLE employee(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `);
    console.log(result);
});
// createUserTable();
const createAddressTable = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const result = yield client.query(`
        CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES employee(id) ON DELETE CASCADE
    )
    `);
    console.log(result);
});
// createAddressTable();
const insertEmployee = (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const inserQuery = "INSERT INTO employee (username, email, password) VALUES ($1, $2, $3) RETURNING id;";
        const values = [username, email, password];
        const result = yield client.query(inserQuery, values);
        console.log("Employee inserted with ID:", result.rows[0].id);
        return result.rows[0].id; // Return the employee's ID to use for address insertion
    }
    catch (e) {
        console.log("There is an error in the code " + e);
    }
});
// insertEmployee("Tirtha", "Tirtha@gmail.com", "Tir123");
const insertAddress = (userId, city, country, street, pincode) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await client.connect();
        const inserQuery = "INSERT INTO addresses(user_id, city, country, street, pincode) VALUES ($1,$2,$3,$4,$5);";
        const values = [userId, city, country, street, pincode];
        const result = yield client.query(inserQuery, values);
        console.log("data inserted successfully" + result);
    }
    catch (e) {
        console.log("There is an error in the code " + e);
    }
});
// insertAddress(1,"Pune", "India", "Pimpri", "411013");
const insertData = () => __awaiter(void 0, void 0, void 0, function* () {
    const userId = yield insertEmployee("Nakul", "Nakul@gmail.com", "Nak432");
    if (userId) {
        yield insertAddress(userId, "Rahuri", "India", "Nagar", "431037");
    }
});
// insertData();
//now write a function to fetch the data form both of this tables
//ideally we can write two different queries for this purpose
//but it is not the good way 
//therfore we will use joins
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const fetchQuery = `SELECT e.id, e.username, e.email, a.city, a.country, a.street, a.pincode
                            FROM employee e
                            JOIN addresses a ON e.id = a.user_id
                            WHERE e.id = '8';`;
        const result = yield client.query(fetchQuery);
        console.log("Data fetched successfully", result.rows[0]);
    }
    catch (e) {
        console.log("There is an error in the code " + e);
    }
});
fetchData();
