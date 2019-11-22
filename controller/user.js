const User = require('../models/user');
//const {registerValidation} = require('../controller/validate');
const bcrypt = require('bcryptjs');


const registerUser = async (req, res)=> {

    //Validating the I/P from the payload
   // const {error} =registerValidation(req.body);
   // if (error) return res.status(400).send(error.details[0].message);

      //Hashing Passwords
      const salt = bcrypt.genSaltSync(10);
      const hashedpassword = bcrypt.hashSync(req.body.password, salt);

 const user = new User({
    name : req.body.name,
    email : req.body.email,
    password : hashedpassword
 });
 try {
    const existingEmail = await User.findOne({email : req.body.email});
    if (existingEmail) return res.status(400).json({message : 'email already exists'});
   
      const saveUser = await user.save();
     res.status(200).send(saveUser);
     
 } catch (error) {
    res.status(404).json({message : error});
 };


};
 
const listUsers = function (req, res){
    User.find(function (err, user) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(user);
    });
};

module.exports = {
    registerUser, listUsers
}