const User = require("../models/user");
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
module.exports.AddUser = async (req, res) => {
    try {
        const { email } = req.body;

        const finduser = await User.find({ email: email })
        if (finduser) return res.status(404).json({ msg: "user already exists" });

        const newuser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            Apartment: req.body.Apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country
        })

        if (!newuser) {
            return res.status(404).send("The user cannt be created")
        }

        return res.status(200).json({ msg: "The user has been created", data: newuser })

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports.GetSingleUser = async (req, res) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            res.status(404).json({ msg: "Invalid Object Id" })
        }
        const singleuser = await User.findById(req.params.id).select('-password');
        if (!singleuser) {
            return res.status(404).json({ msg: "No user with id has been found" })
        }

        return res.status(200).json({ data: singleuser })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}



module.exports.GetAllUser = async (req, res) => {
    try {
        const Allusers = await User.find().select('name email');;
        if (!Allusers) {
            return res.status(404).send("No categories")
        }

        return res.status(200).send(Allusers)

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


module.exports.LoginUser = async (req, res) => {
    try {
        const checkuser = await User.findOne({ email: req.body.email })
        if (!checkuser) return res.status(400).json({ msg: "User does not exists" })
        if (checkuser && await checkuser.comparePassword(req.body.password)) {
            const token = jwt.sign({
                userid: checkuser._id
            }, process.env.JWT_KEY, {
                expiresIn: '1h'
            })

            res.status(200).json({ emai: checkuser.email, token: token })
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}



// module.exports.DeleteCategory = async (req, res) => {
//     try {
//         if(!mongoose.isValidObjectId(req.params.id)){
//             res.status(404).json({msg:"Invalid Object Id"})
//         }

//         const find = await categorie.findByIdAndDelete(req.params.id)
//         console.log(find)
//         if (find) {
//             return res.status(200).send("The category has been deleted")
//         }
//         return res.status(400).send("The category has not been Deleted")

//     } catch (error) {
//         res.status(500).json({ msg: error.message })
//     }
// }


// module.exports.UpdateCategory = async (req, res) => {
//     try {
//         if(!mongoose.isValidObjectId(req.params.id)){
//             res.status(404).json({msg:"Invalid Object Id"})
//         }
//         const update = await categorie.findByIdAndUpdate(
//             req.params.id,
//             {
//                 name: req.body.name,
//                 Iconname: req.body.Iconname,
//                 Color: req.body.Color
//             },
//             {new:true}
//         )
//         if (!update) {
//             return res.status(200).send("The category has not been updated")
//         }
//         return res.status(400).json({msg:"The category has been Updated",data:update})

//     } catch (error) {
//         res.status(500).json({ msg: error.message })
//     }
// }