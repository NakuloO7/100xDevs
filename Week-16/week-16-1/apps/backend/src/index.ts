
import express from "express";
import {Value } from '@repo/common/config'


const app = express();

app.get('/', (req, res)=>{
    res.json({
        message : "Hello world",
        value : Value
    })
})

app.listen(3005, ()=>{
    console.log("app listening on port 3005")
})