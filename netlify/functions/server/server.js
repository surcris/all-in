const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router()
// router.use(express.json());

// Définissez vos routes
router.get("/hello", (req, res) => res.send("Hello World!"));

app.use("/api/",router)

module.exports.handler = serverless(app);