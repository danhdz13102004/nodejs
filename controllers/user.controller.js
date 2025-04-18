const User = require('../models/user.model');

exports.create = async (req, res) => {
 console.log('Request body:', req.body); // Log the request body to check if it's correct
  const user = new User(req.body);

  console.log('User data:', req.body); // Log the user data to check if it's correct
  await user.save();
  res.json(user);
};

exports.getAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.update = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

exports.delete = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};
