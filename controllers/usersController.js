const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "get users success",
      data: users
    })
  }
  catch(err) {
    res.status(500).json({
      message: "get users failed",
      data: err
    })
  }
};

const saveUser = async (req, res) => {
  try{
    const user = new User(req.body);
    const savedUser = await user.save()
    res.status(201).json({
      message: "save user success",
      data: savedUser
    })
  }
  catch(err) {
    res.status(500).json({
      message: "save user failed",
      data: err
    })
  }
};

module.exports = {
  getUsers,
  saveUser
}