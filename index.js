const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send('<h1>Hello Express!</h1>');
})

app.get("/hello", (req, res) => {
    res.send('<h1>Hello!</h1>');
});


app.get("/ping", (req, res) => {
    res.json({inset: "haldljksaf"})
});


app.listen(5000, (req, res) => {
    console.log("server started on port 5000");
})