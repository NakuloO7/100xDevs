import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable",
});

const createTable = async () => {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE users2 (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);

  console.log(result);
};

// createTable();

const insertData = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    await client.connect();
    const result = await client.query(
      `
            INSERT INTO users2 (username, email, password) 
VALUES ($1, $2, $3);
            `,
      [username, email, password]
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// insertData("tirtha", "tirtha@gmail.com", "tir231");

//updateTable

const updateData = async () => {
  try {
    client.connect();
    const result = await client.query(`
            UPDATE users2
SET username = 'nehaa' 
WHERE email = 'neha@example.com';
            `);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// updateData();

//delete user

const deleteData = async () => {
  try {
    client.connect();
    const result = client.query(`
            DELETE FROM users2 WHERE id = 2;
            `);
  } catch (error) {
    console.log(error);
  }
};

// deleteData();

//Writng the address table

const createAddresTable = async () => {
  try {
    await client.connect();

    const result = await client.query(`
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
  } catch (error) {
    console.log(error);
  }
};

// createAddresTable();

//Inset Address

const insertAddress = async (
  user_id: number,
  city: string,
  country: string,
  street: string,
  pincode: string
) => {
  try {
    await client.connect();

    const result = await client.query(
      `
            INSERT INTO addresses2 (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
            `,
      [user_id, city, country, street, pincode]
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// insertAddress(2, ' New York', 'USA', '324 Broadway St', '20001');

//Transactoins in SQl

const transactionCode = async (
  username: string,
  email: string,
  password: string,
  city: string,
  country: string,
  street: string,
  pincode: string
) => {
  try {
    await client.connect();

    await client.query("BEGIN"); //start the transaction

    const result = await client.query(
      `
            INSERT INTO users2 (username, email, password) 
            VALUES ($1, $2, $3) RETURNING id;
            `,
      [username, email, password]
    );

    const user_id = result.rows[0].id; //way to pass the userid(primary key)

    const result2 = await client.query(
      `
            INSERT INTO addresses2 (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
            `,
      [user_id, city, country, street, pincode]
    );

    console.log(result);
    console.log(result2);

    await client.query("COMMIT"); //ending the transaction
  } catch (error) {
    console.log(error);
  }
};

// transactionCode(
//   "rihan",
//   "rihan@gmail.com",
//   "rih321",
//   " New York",
//   "USA",
//   "324 Broadway St",
//   "20001"
// );



const getAllData = async(userId : number)=>{
    try {
        await client.connect();

        const res = await client.query(`
                SELECT users2.id, users2.username, users2.email, addresses2.city, addresses2.country, addresses2.street, addresses2.pincode
                FROM users2
                JOIN addresses2 ON users2.id = addresses2.user_id
                WHERE users2.id = $1;
            `,[userId]);

        console.log(res.rows[0]);

    } catch (error) {
        console.log(error);
    }
}

getAllData(10);
