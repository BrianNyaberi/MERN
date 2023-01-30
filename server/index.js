requre('dotenv').config();
const express = ('express');
const app = express();
const cors = require('cors');
const { connection } = require('mongoose');
const Connection = require('./db');

// database connection
connection();

// mmiddlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8090;
app.listen(port, () => console.log(`Listening on port ${port}`));