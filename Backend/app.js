require('dotenv').config();
const express = require('express');
const imageRoutes = require('./routes/image');

const app = express();

app.use(imageRoutes);

app.listen(8080);
