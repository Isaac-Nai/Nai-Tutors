const express = require("express");
const app = express()

const port = process.env.PORT


app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    next();
})

app.listen(port, () => {
    console.log("Server is live and running on port: " + port);
})

