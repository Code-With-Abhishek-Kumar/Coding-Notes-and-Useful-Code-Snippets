const post = require('../models/PostSchema');
const UserSchema = require('../models/UserSchema')

let postController = {};





postController.create = async(req, res) =>{


    try {
        let user = await UserSchema.find()
        

   let userId =  user.map(function(user) {
        let userId = user._id

        return userId;

    })




    let postCreate = post.create({
        user_id: userId ,
        title : "first post",
        content: "Learn Populate",

        })
       


    req.redirect('/')


        
        



    } catch (error) {
        res.send(error.message)
    }
}





module.exports = postController;
