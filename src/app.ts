import express from 'express';
const cors = require("cors");
require("dotenv").config();

const cryptoRouter = require('./routes/cryptoRoutes');
const  {job} = require ('./utils/cronJob');

const app = express();

app.use(express.json());
app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:5001"],
    })
  );

app.use('/', cryptoRouter);

job.start();

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
});

app.use((err, req, res, next) => {
    const { status = 500, message = 'Internal Server Error' } = err;
    res.status(status).json({ message })
});

module.exports = app;