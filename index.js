const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running and listening on port ${port}.`);
})