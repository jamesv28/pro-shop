import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";
// @desc get users and get token
// @route GET /api/users/login
// @access PUBLIC
const authUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc post users egister users
// @route post /api/users/
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc logoout user / remove cookie
// @route post /api/users/logout
// @access PRIVATE
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie(jwt, "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "logged out user" });
});

// @desc get user profile
// @route GET /api/users/profile
// @access PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc get user profile
// @route PUT /api/users/profile
// @access PRIVATE
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc get users
// @route PUT /api/users/
// @access ADMIN
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user by id");
});

// @desc get users by id
// @route GET /api/users/:id
// @access ADMIN
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc get all user
// @route gET /api/users
// @access ADMIN
const getUsers = asyncHandler(async (req, res) => {
  res.send("get all Users");
});

// @desc delete user
// @route DELETE /api/users/:id
// @access ADMIN
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete User");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  updateUser,
  getUsers,
  getUserById,
  deleteUser,
};
