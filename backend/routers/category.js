const express = require('express');
const categoryrouter = express.Router();
const {
   POSTCATEGORY,
   DeleteCategory
} = require("../controller/category");
  

console.log("eee")
categoryrouter.post('/',POSTCATEGORY)
categoryrouter.delete('/:id',DeleteCategory)
module.exports = categoryrouter;