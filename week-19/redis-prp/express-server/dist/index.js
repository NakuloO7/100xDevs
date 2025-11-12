import express, { json } from 'express';
import { createClient } from 'redis';
const app = express();
app.use(express.json());
const client = createClient();
client.on('error', (err) => {
    console.log('Redis Clinet Errr', err);
});
app.post('/submit', async (req, res) => {
    const { name, email, password } = req.body;
    await client.lPush("Submission", JSON.stringify({ name, email, password }));
    res.json({
        message: "Data received succssfully!"
    });
});
const startServer = async () => {
    try {
        await client.connect();
        console.log("Connected to redis");
        app.listen(3000, () => {
            console.log("App listening of port:3000");
        });
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
//# sourceMappingURL=index.js.map