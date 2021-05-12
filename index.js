const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send('<h1>Hello Express!</h1>');
})

app.get("/hello", (req, res) => {
    res.send('<h1>Hello!</h1>');
});


app.get("/ping", (req, res) => {
    res.status(500).json({
        message: { msgBody: "Something went wrong...", msgError: true },
    });
});


app.listen(5000, (req, res) => {
    console.log("server started on port 5000");
})