const userModel = require('../models/user.model');

exports.homePage = (req,res) => {
    res.render("index")
}

exports.createUser = async (req,res) => {
    let {name,email,phone,image} = req.body
    await userModel.create({
        name,
        email,
        phone,
        image
    })
    res.redirect("/api/v1/user/read")
}

exports.modifyUser = async (req,res) => {
    let {name,email,phone,image} = req.body
    await userModel.findOneAndUpdate({_id : req.params.id},{
        name,
        email,
        phone,
        image
    })
    res.redirect("/api/v1/user/read")
}

exports.readUsers = async (req,res) => {
    let users = await userModel.find()
    res.render("read",{users:users})
}

exports.deleteUser = async (req,res) => {
    await userModel.findOneAndDelete({_id : req.params.id})
    res.redirect("/api/v1/user/read")
}

exports.updateUser = async (req,res) => {
    const user = await userModel.findOne({_id : req.params.id})
    res.render("update",{user : user})
}