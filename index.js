const express = require('express');
const dotenv = require('dotenv').config({path: "./src/config/config.env"});
const app = express()

const PORT = process.env.PORT

app.listen(PORT , () => {
    console.log(`server succesfuly connected to port ${PORT}`);
})