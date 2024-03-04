const express = require('express')

const routes = express.Routes()

routes.get((req, res, next) => {
    res.send("<h1>Welcome to My Shop</h1>");
});

module.exports = router;