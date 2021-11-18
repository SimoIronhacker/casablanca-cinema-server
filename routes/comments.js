const { Router } = require("express");
const express = require("express");
const router = new express.Router();

const commentModel = require("../models/Comments")


router.get("/comment", async(req, res, next) => {
    try {
        const comments = await commentModel.find();
        res.status(200).json(comments);
    }catch(err) {
        next(err);
    }
});

router.post("/comment", async(req, res, next) => {
    try {
        const newComment = await commentModel.create(req.body);
        res.status(200).json(newComment);
    }catch(err) {
        next(err);
    }
});

router.get("/comment/:id", async(req, res, next) => {
    try {
        const comment = await commentModel.findById(req.params.id);
        res.status(200).json(comment);
    }catch(err) {
        next(err);
    }
});

router.delete("/comment/:id", async(req, res, next) => {
    try {
        const deleteComment = await commentModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteComment);
    }catch(err) {
        next(err);
    }
});

router.patch("/comment/:id", async(req, res, next) => {
    try {
        const updateComment = await commentModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateComment);
    }catch(err) {
        next(err);
    }
});


module.exports = router;