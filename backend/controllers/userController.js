import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc get users and get token
// @route GET /api/users/login
// @access PUBLIC
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc post users egister users
// @route post /api/users/
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc logoout user / remove cookie
// @route post /api/users/logout
// @access PRIVATE
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
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
