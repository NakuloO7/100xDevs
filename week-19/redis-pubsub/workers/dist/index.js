import { createClient } from "redis";
const client = createClient();
async function processSubmission(submission) {
    const { problemId, code, language } = JSON.parse(submission);
    console.log(`Processing submission for problemId ${problemId}...`);
    console.log(`Code: ${code}`);
    console.log(`Language: ${language}`);
    //simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Finished processing submission for problemId ${problemId}.`);
}
const startWorker = async () => {
    try {
        await client.connect();
        console.log("worker connected to redis");
        while (true) {
            try {
                const submission = await client.brPop("problems", 0);
                // @ts-ignore
                await processSubmission(submission.element);
            }
            catch (error) {
                console.error("Error processing submission:", error);
                // Implement your error handling logic here. For example, you might want to push
                // the submission back onto the queue or log the error to a file.
            }
        }
    }
    catch (error) {
        console.error("Failed to connect to Redis", error);
    }
};
startWorker();
//# sourceMappingURL=index.js.map