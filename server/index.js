
/**
 * Created_by: Brian nyaberi
 * Created_date: 
 * About: 
 * Last Modified_by:
 */

require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
// const { connection } = require('mongoose');
const connection = require('./db');

// import routes
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');

// database connection
connection();

// mmiddlewares
app.use(express.json());
app.use(cors());

// routes
app.use("api/users", userRouter);
app.use("api/users", authRouter);

const port = process.env.PORT || 8090;
app.listen(port, () => console.log(`Listening on port ${port}`));