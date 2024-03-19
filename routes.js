const express = require('express');
const router = express.Router();
const quotes = require('./quotes')
const rateLimitMiddleware = require('./rateLimiter')

const getQuote = () => {
    let index = Math.ceil(Math.random() * 100) % 11
    return quotes.array[index]
}

router.route('/')
      .get( rateLimitMiddleware, async (req,res) => {
        let quote = getQuote();
        return res.send(quote);
      })

router.route('/health')
      .get((req,res) => {
        return res.sendStatus(200);
      })

module.exports = router;