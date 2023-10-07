const mongoose = require('mongoose');


const Categoryschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Iconname:{
        type:String,
        required:true
    },
    Color:{
        type:String,
        required:true
    },
    
})

module.exports = mongoose.model('Category',Categoryschema);