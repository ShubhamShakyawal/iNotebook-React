const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'mazaaaya';

// ROUTE 1: Create a user using : POST "/api/auth/createuser". No login required.
router.post('/createuser',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({ min: 5 })
],async (req,res)=>{
  let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() }); //400=>bad network request
    } 
   try{
    let user = await User.findOne({email: req.body.email});
   if(user){
     return res.status(400).json({success, error: "Sorry a user with this already exists."})
   } 

   const salt = await bcrypt.genSalt(10);
   const secPass = await bcrypt.hash(req.body.password,salt);

   user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
      })
      const data = {
        user:{
          id: user.id
        }
      }
      
      const authtoken = jwt.sign(data,JWT_SECRET);
      success = true;
      // console.log();
    //   .then(user => res.json(user))
    //   .catch(err=> {console.log(err)
    //  res.json({error: 'Please enter a unique email'})});
      res.json({success, authtoken});
      // res.json({error: 'Please enter a unique email'})
    }
    catch(error){
      console.log(error.message);
      res.status(500).send("Internal Server error"); //500 => Internal Server error
    }
})

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login',[
  body('email','Enter a valid email').isEmail(),
  body('password','Password cannot be blank').exists(),
], async(req,res)=>{
  let success = false;
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({success, errors: errors.array()});
  }

  const {email,password} = req.body;
  try{
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({error: "Please try to login with correct credentials"});
    }
   const passwordCompare = await bcrypt.compare(password,user.password);
  if(!passwordCompare){
    
    return res.status(400).json({success, error: "Please try to login with correct credentials"});
  }
 
  const data = {
    user:{
      id: user.id
    }
  }
  const authtoken = jwt.sign(data,JWT_SECRET);
  success = true;
  res.json({success ,'authtoken': authtoken});
}catch(error){
  console.log(error.message);
  res.status(500).send("Internal Server error"); //500 => Internal Server error
}
})

// ROUTE 3:  Get loggedin User details using: POST "/api/auth/getuser". Login required
router.post('/getuser',fetchuser,async (req,res)=>{
try {
   let userId = req.user.id;
  const user = await User.findById(userId).select("-password")
  res.send(user);
} catch(error){
  console.log(error.message);
  res.status(500).send("Internal Server error"); //500 => Internal Server error
}
}) 
module.exports = router;