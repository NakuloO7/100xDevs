"use strict";
// Create a function that let’s you insert data into a table.
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
    connectionString: "postgresql://test_owner:UEpMlTZ8R0xQ@ep-shiny-wildflower-a5kgk6yn.us-east-2.aws.neon.tech/test?sslmode=require"
});
const createUserTable = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const result = yield client.query(`
        CREATE TABLE users(
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
const insertData = (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const inserQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);";
        const values = [username, email, password];
        const result = yield client.query(inserQuery, values);
        console.log("data inserted successfully" + result);
    }
    catch (e) {
        console.log("There is an error in the code " + e);
    }
});
// insertData("neha", "neha@gmail.com", "ne123");
const getData = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const getQuery = "SELECT * FROM users WHERE email = $1";
        const result = yield client.query(getQuery, [email]);
        if (result.rows.length > 0) {
            console.log('User found', result.rows[0]);
            return result.rows[0];
        }
        else {
            console.log("No user found with the given email");
            return null;
        }
    }
    catch (e) {
        console.log("Unable to fetch the data" + e);
    }
});
getData("neha@gmail.com");
