const product = require('../models/product')
const categorie = require('../models/categorie');
const { default: mongoose } = require('mongoose');



module.exports.PostProduct = async (req, res) => {
    try {
        const check = await categorie.findById(req.body.category);
        if (!check) return res.status(400).json({ msg: "invalid category Id" });

        const isProductAdded = await product.create({
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            Images: req.body.Images,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countinStock: req.body.countinStock,
            ratings: req.body.ratings,
            Numreviews: req.body.Numreviews,
            isfeatured: req.body.isfeatured
        })

        if (!isProductAdded) {
            return res.status(404).send("The product cannot be created")
        }

        return res.status(200).json({ msg: "The Product has been created" })

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}



module.exports.GetProduct = async (req, res) => {
    try {
        const productlist = await product.find();
        if (!productlist) {
            return res.status(404).send("No product")
        }

        return res.status(200).send(productlist)

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


module.exports.GetIndividualProduct = async (req, res) => {
    try {
        if(!mongoose.isValidObjectId(req.params.id)){
            res.status(404).json({msg:"Invalid Object Id"})
        }
        const singleproduct = await product.findById(req.params.id);
        if (!singleproduct) {
            return res.status(404).json({ msg: "No category with id has been found" })
        }

        return res.status(200).json({ data: singleproduct })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}



module.exports.UpdateProduct = async (req, res) => {
    try {
        if(!mongoose.isValidObjectId(req.params.id)){
            res.status(404).json({msg:"Product id is not valid"})
        }
        const check = await categorie.findById(req.body.category);
        if (!check) return res.status(400).json({ msg: "invalid category Id" });

        const update = await product.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description,
                richDescription: req.body.richDescription,
                image: req.body.image,
                Images: req.body.Images,
                brand: req.body.brand,
                price: req.body.price,
                category: req.body.category,
                countinStock: req.body.countinStock,
                ratings: req.body.ratings,
                Numreviews: req.body.Numreviews,
                isfeatured: req.body.isfeatured
            },
            {new:true}
        )
        if (!update) {
            return res.status(200).send("The category has not been updated")
        }
        return res.status(400).json({msg:"The category has been Updated",data:update})

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


module.exports.DeleteProduct = async (req, res) => {
    try {
        if(!mongoose.isValidObjectId(req.params.id)){
            res.status(404).json({msg:"Product id is not valid"})
        }
        const find = await product.findByIdAndDelete(req.params.id)
        console.log(find)
        if (find) {
            return res.status(200).send("The category has been deleted")
        }
        return res.status(400).send("The category has not been Deleted")

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}



module.exports.ProductCount = async (req, res) => {
    try {
        const productcount = await product.countDocuments();
        if (!productcount) {
            return res.status(404).send("No product")
        }
        return res.status(200).json({productcount:productcount})

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}



module.exports.FeaturedProduct = async (req, res) => {
    try {
       
        const count = req.params.count ? req.params.count : 0;
        console.log(count)
        const products = await product.find({isfeatured:true}).limit(count);
        if (!products) {
            return res.status(404).send("No product")
        }
        return res.status(200).json({data:products})

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


module.exports.FilterProductByCategory = async (req,res) => {
    try {
        console.log("aaa",req.query.categories)
        let filter = {};
        if(req.query.categories){
            filter = {categories:req.query.categories.spil(",")}
        }
        console.log("filter")
        const productlist = await product.find(filter);
        if (!productlist) {
            return res.status(404).send("No product")
        }

        return res.status(200).send(productlist)
        
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}