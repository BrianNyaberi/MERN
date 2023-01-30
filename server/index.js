require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
// const { connection } = require('mongoose');
const connection = require('./db');

// database connection
connection();

// mmiddlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8090;
app.listen(port, () => console.log(`Listening on port ${port}`));