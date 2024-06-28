const User = require('../models/UserSchema');
let userController = {};

userController.createUser = async (req, res) => {
    try {
        // const createUser = User.create({
        //     username: "Abhi001",
        //     email: "abhishek9661342993@gmail.com",
        //     password: "hero@1123",
     
        // })
     
        // res.status(201).json(createUser);
        
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


userController.findUser = async (req, res) => {
    try {
    let findUser = await User.find()
    res.json(findUser)
        
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = userController;
