import express from 'express';


const app = express();
const port = 4000;
import {Value} from '@repo/common/config'
console.log(Value);

app.get("/", (req, res)=>{
    res.json({
        message : "Hello to the new express sever!"
    })
})

app.listen(port, ()=>{
    console.log(`app listening in port ${port}`)
})


export default app;