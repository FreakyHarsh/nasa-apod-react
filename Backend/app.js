require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const imageRoutes = require('./routes/image');

const app = express();

app.use(helmet());
app.use(compression());

app.use(imageRoutes);

app.listen(8080);
