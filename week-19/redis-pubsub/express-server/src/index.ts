import express from 'express'
import { createClient } from 'redis'

const app = express();
app.use(express.json());

const client = createClient();
client.on('error', err =>console.log('redis client erroo', err));



app.post('/submit', async(req , res)=>{
    const {problemId, code, language} = req.body;

    try {
        await client.lPush("problems", JSON.stringify({code, language, problemId}));
        res.status(200).send("Submission received and stored");
    } catch (error) {
        console.error("redis error", error);
        res.status(500).send("Failed to store submission");
    }
})


const startServer = async()=>{
    try {
        await client.connect();
        console.log("Connected to redis");

        app.listen(3000, ()=>{
            console.log("app listening on PORT : 3000")
        })
        
    } catch (error) {
        console.error("Failed to connect redis", error);
    }
}

startServer();