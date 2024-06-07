const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router()
// router.use(express.json());

// Définissez vos routes
router.get('/api', (req, res) => {
  res.send({ "path" : "message" });
  
});

app.use("/.netlify/functions/server/",router)
module.exports.handler = serverless(app);