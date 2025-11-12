import { createClient } from "redis";
const client = createClient();
const startWorker = async () => {
    try {
        await client.connect();
        console.log("Connected to redis");
        while (1) {
            const response = await client.brPop("Submission", 0);
            await new Promise((resolve) => setTimeout(resolve, 1000)); //this will add delay of 1sec
            console.log("Process user submissions");
        }
    }
    catch (error) {
        console.log(error);
    }
};
startWorker();
//# sourceMappingURL=index.js.map