const express = require('express');
const { PostProduct, GetProduct, GetIndividualProduct, UpdateProduct, DeleteProduct, ProductCount, FeaturedProduct, FilterProductByCategory } = require('../controller/product');
const productrouter = express.Router();

productrouter.get('/get-count/',ProductCount)
productrouter.post('/',PostProduct)
productrouter.get('/',GetProduct)
productrouter.get('/:id',GetIndividualProduct)
productrouter.put('/:id',UpdateProduct)
productrouter.delete('/:id',DeleteProduct)
productrouter.get('/featured/:count',FeaturedProduct)
productrouter.get('/filter/',FilterProductByCategory)
module.exports = productrouter;