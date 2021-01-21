require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
var cors = require('cors');

const imageRoutes = require('./routes/image');

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());

app.use(imageRoutes);
app.use((req, res, next) => {
  res.send('hello');
});

app.listen(8080);
