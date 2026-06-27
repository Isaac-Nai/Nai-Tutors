const express = require("express");
const cors = require("cors");
const signUp = require("./routes/signUp");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({origin: "http://127.0.0.1:3000"})); 

///////////////// Middleware

// Body parser

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Logger 

app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    next();
})

// Routes

app.use("/api/signUp", signUp)


// Listening 

app.listen(port, () => { 
    console.log("Server is live and running on port: " + port);
})

