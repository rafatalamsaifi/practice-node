const express = require('express');
const app = express();
const axios = require("axios");
const cors = require('cors');
const port = process.env.port || 8000;

app.use(cors())

app.get('/', (req, res)=>{
    res.json({"message":"Home Page"})
});

app.get("/about", (req, res)=>{
    res.json({"message":"About Page"})
});

app.get("/users", (req, res)=>{
    const userData = axios("https://jsonplaceholder.typicode.com/users").then(
        (res)=>{
            console.log(res.json(data))
        }
    )
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});