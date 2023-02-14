const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      username: username,
      password: hashedPassword,
    });
    res.status(200).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({ status: 'failed' });
  }
};

exports.logIn = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        status: 'failed',
        message: 'User not found',
      });
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if (isCorrect) {
      res.status(200).json({
        status: 'success',
      });
    } else {
      res.status(400).json({
        status: 'failed',
        message: 'Incorrect username or password',
      });
    }
  } catch (error) {
    res.status(400).json({ status: 'failed' });
  }
};
