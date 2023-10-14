const express = require('express');
const { PostProduct, GetProduct, GetIndividualProduct, UpdateProduct, DeleteProduct, ProductCount, FeaturedProduct, FilterProductByCategory } = require('../controller/product');
const productrouter = express.Router();
const multer = require('multer');

const FileType = {
    "image/png":'png',
    "image/jpeg":'jpeg',
    "image/jpg":'jpg'
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let uploaderror =  new Error("invalid file type")
      let isvalid = FileType[file.mimetype]
      if(isvalid){
        uploaderror = null
      }
      cb(uploaderror, 'public/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log("file",file.mimetype)
      const extension = FileType[file.mimetype]
      console.log("Extension",extension)
      cb(null, `${file.originalname}-${uniqueSuffix}.${extension}` )
    }
  })
  
const upload = multer({ storage: storage })
  
productrouter.get('/get-count/',ProductCount)
productrouter.post('/',upload.single('image'),PostProduct)
productrouter.get('/',GetProduct)
productrouter.get('/:id',GetIndividualProduct)
productrouter.put('/:id',UpdateProduct)
productrouter.delete('/:id',DeleteProduct)
productrouter.get('/featured/:count',FeaturedProduct)
productrouter.get('/filter',FilterProductByCategory)
module.exports = productrouter;