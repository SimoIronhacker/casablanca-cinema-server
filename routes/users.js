const express = require('express');
const router = new express.Router();

const userModel = require("../models/User");

router.get("/user", async (req, res, next) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  }catch(err) {
    next(err);
  }
});

router.post("/user", async (req, res, next) => {
  try {
    const newUser = await userModel.create(req.body);
    res.status(200).json(newUser);
  }catch(err) {
    next(err);
  }
});

router.get("/user/:id", async (req, res, next) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.status(200).json(user);
  }catch(err) {
    next(err);
  }
  
});

router.delete("/user/:id", async (req, res, next) => {
  try {
    const deleteUser = await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteUser);
  }catch(err) {
    next(err);
  }
});

router.patch("/user/:id", async(req, res, next) => {
  try {
    const updateUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateUser);
  }catch(err) {
    next(err);
  }
});



module.exports = router;
