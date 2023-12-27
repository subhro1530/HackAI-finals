import express from 'express';
const app=express();
import connectDatabase from "./database.js";



connectDatabase();

app.listen(3000,() => {
    console.log("Server is on on 3000");
})