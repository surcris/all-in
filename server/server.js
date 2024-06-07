// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const serverless = require('serverless-http');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ message: 'Hello from API' }));
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports.handler = serverless(app);