const express = require('express');
const app = express();
app.use(express.json());
const RouterProduct = require('./routes/products');
app.use('/api/v1',RouterProduct);
module.exports=app;