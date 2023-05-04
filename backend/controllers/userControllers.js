const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js")
const generateToken=require('../config/generateToken.js')
const registerUser = asyncHandler(async (req,res) => {
const { name, email,detail, password/*piv*/} = req.body;

  if (!name || !email|| !detail || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
    }
    const userExists = await User.findOne({ email });
      if (userExists) {
    res.status(400);
    throw new Error("User already exists");
    }
     const user = await User.create({
    name,
    email,
    detail,
    password,
    // pic,
     })
      if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      detail:user.detail,
      isAdmin: user.isAdmin,
      // pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  } 

})

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password)) ) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      // pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
        { email: { $regex: req.query.search, $options: "i" } },
        { detail: { $regex: req.query.search, $options: "i" } },

        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } }); // $ne: req.user._id  - current user kp chod kr
  res.send(users);
  console.log(keyword)
});


module.exports = { registerUser,authUser,allUsers };
