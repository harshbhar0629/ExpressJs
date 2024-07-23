/** @format */

const express = require("express");
const router = express.Router();
const Blog = require("../models/blogApp.js");

router.post("/post", async (req, res) => {
	try {
		const { title, description } = req.body;
		let post = await Blog.create({ title, description });
		res.status(200).json({
			success: true,
			data: post,
			messgae: "Successfully post created",
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			data: err.messgae,
			messgae: "Error in post creation",
		});
	}
});

router.get("/post/:id", async (req, res) => {
	try {
		let { id } = req.params;
		let post = await Blog.findById(id);
		res.status(200).json({
			success: true,
			data: post,
			messgae: "Successfully post created",
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			data: err.messgae,
			messgae: "Error in retrieving in post",
		});
	}
});

router.put("/post/:id", async (req, res) => {
	try {
		let { id } = req.params;

		let post = await Blog.findByIdAndUpdate(id, { ...req.body });
		res.status(200).json({
			success: true,
			data: post,
			messgae: "Successfully post updated",
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			data: err.messgae,
			messgae: "Error in retrieving in post",
		});
	}
});

router.delete("/post/:id", async (req, res) => {
	try {
		let { id } = req.params;

		let post = await Blog.findByIdAndDelete(id);
		res.status(200).json({
			success: true,
			data: post,
			messgae: "Successfully post deleted",
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			data: err.messgae,
			messgae: "Error in deletion in post",
		});
	}
});

router.post("/comment/:id", async (req, res) => {
	try {
		let { id } = req.params;
		let { comment } = req.body;
		console.log(comment);
		let post = await Blog.findById(id);
		post.comments.push(comment);

		await post.save();
		res.status(200).json({
			success: true,
			data: post,
			messgae: "Successfully post comment updated",
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			data: err.messgae,
			messgae: "Error in post comments",
		});
	}
});

router.post("/like/:id", async (req, res) => {
	try {
		let { id } = req.params;
		let { like } = req.body;
		let post = await Blog.findById(id);
		post.like = like;
		await post.save();
		res.status(200).json({
			success: true,
			data: post,
			messgae: "Successfully post like updated",
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			data: err.messgae,
			messgae: "Error in post like",
		});
	}
});

router.post("/unlike/:id", async (req, res) => {
	try {
		let { id } = req.params;
		let { unlike } = req.body;
		let post = await Blog.findById(id);
		post.unlike = unlike;
		await post.save();
		res.status(200).json({
			success: true,
			data: post,
			messgae: "Successfully post unlike updated",
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			data: err.messgae,
			messgae: "Error in post unlike",
		});
	}
});

module.exports = router;
