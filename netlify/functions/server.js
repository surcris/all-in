const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

// Définissez vos routes
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Serverless Function!' });
});

module.exports.handler = serverless(app);