const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require('./dbConnection');
const cors = require('cors');  // Add this line

connectDb();
const app = express();

// Enable CORS for all routes
app.use(cors());  // Add this line

app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use("/candidate", require('./routes/candidateRoute'));

console.log(process.env.PORT);