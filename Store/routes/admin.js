const express = require('express');

const routes = express.Routes()

app.get("/add-product", (req, res, next) => {
    res.send(`<body>
    <form action="/admin/add-product" method="POST"><input type="text" name="message"><button type="submit">Add Product</button></form></body>`);
});

app.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;