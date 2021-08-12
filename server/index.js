const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const urlRouter = require('./routes/url.routes');

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/db';

const db = mongoose
  .connect(DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => response)
  .catch((error) => console.log(error));

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('client'));
app.use('/url', urlRouter);

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
