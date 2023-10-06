const categorie  = require("../models/categorie").Category;


module.exports.POSTCATEGORY = async (req, res) => {
    try {
        const { name, Iconname, Color } = req.body;
        const Categoryitem = await categorie.create({
            name: name,
            Iconname: Iconname,
            Color: Color,
        })

        if (!Categoryitem) {
            return res.status(404).send("The category cannt be created")
        }

        return res.status(200).send("The category has been created")

    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports.DeleteCategory = async (req,res) => {
    try {
        const find = await categorie.findByIdAndDelete(req.params.id)
        console.log(find)
        if(find){
            return res.status(200).send("The category has been deleted")
        }
        return res.status(400).send("The category has not been Deleted")

    } catch (error) {
        res.status(500).send(error.message)
    }
}