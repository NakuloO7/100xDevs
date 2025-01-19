// Create a function that let’s you insert data into a table.


//connecting to your database
import { Client } from "pg";

const client = new Client({
    connectionString : "postgresql://test_owner:UEpMlTZ8R0xQ@ep-shiny-wildflower-a5kgk6yn.us-east-2.aws.neon.tech/test?sslmode=require"
})


const createUserTable = async ()=>{
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `)
    console.log(result);
}

// createUserTable();


const insertData = async (username : string, email : string, password : string) =>{
   try{
    await client.connect();
    const inserQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3);";
    const values = [username, email, password];
    const result = await client.query(inserQuery, values)

    console.log("data inserted successfully" + result);
   }catch(e){
    console.log("There is an error in the code " + e);
   }
}

// insertData("neha", "neha@gmail.com", "ne123");


const getData = async(email :string)=>{
    try{
        await client.connect();

        const getQuery = "SELECT * FROM users WHERE email = $1";
        const result = await client.query(getQuery, [email]);

        if(result.rows.length > 0){
            console.log('User found' , result.rows[0]);
            return result.rows[0];
        }else{
            console.log("No user found with the given email");
            return null;
        }
        
    }catch(e){
        console.log("Unable to fetch the data" + e);
    }
}

getData("neha@gmail.com");
