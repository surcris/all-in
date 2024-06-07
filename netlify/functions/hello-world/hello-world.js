// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

const express = require('express');
const serverless = require('serverless-http');

const router = express.Router()
const app = express();
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    router.use(express.json());

    // Définissez vos routes
    router.get('/api', (req, res) => {
      res.json({ message: 'Hello from Serverless Function!' });
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}





module.exports = { handler }
