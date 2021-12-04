const express = require('express');
const router = express.Router();
const getProducts  = require('../controllers/productsController');
router.route('/products').get(getProducts.getProducts);
module.exports=router;