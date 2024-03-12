const express = require('express');
const router = express.Router();
const quotes = require('./quotes')

const getQuote = () => {
    let index = Math.ceil(Math.random() * 100) % 11
    return quotes.array[index]
}

router.route('/')
      .get(async (req,res) => {
        let quote = getQuote();
        return res.send(quote);
      })

module.exports = router;