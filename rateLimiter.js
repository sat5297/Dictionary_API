let setRateLimit = require("express-rate-limit");

const rateLimitMiddleware = setRateLimit({
    windowMs: 30 * 1000,
    max: 5,
    message: "You have exceeded your 5 requests per minute limit.",
    headers: true,
});
  
module.exports = rateLimitMiddleware;