const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World !");
})

app.listen(5500, () => {
    console.log("Server is listenning on port 5500");
})