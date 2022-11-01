const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')

const Comment = require('../models/Comment')

// @route GET api/comments
// @desc Get comments
// @access Private
router.get('/', verifyToken, async (req, res) => {

	try {
		const comments = await Comment.find({ user: req.userId })
    .populate('user', ['username'])
    .populate('thread', ['title'])
		res.json({ success: true, comments })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route POST api/comments
// @desc Create comment
// @access Private
router.post('/', verifyToken, async (req, res) => {
  console.log(req.body, req.userId,  req.params.id)
	const { comment, active } = req.body

	// Simple validation
	if (!title)
		return res
			.status(400)
			.json({ success: false, message: 'Title is required' })

	try {
		const newComment = new Comment({
			comment,
			active,
      thread: req.userId,
			user: req.userId
		})

		await newComment.save()

		res.json({ success: true, message: 'Happy learning!', comment: newComment })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route PUT api/comments
// @desc Update comment
// @access Private
router.put('/:id', verifyToken, async (req, res) => {
	const { title, slug, content, like, active } = req.body

	// Simple validation
	if (!title)
		return res
			.status(400)
			.json({ success: false, message: 'Title is required' })

	try {
		let updatedComment = {
			title,
			slug: slug || '',
      content: content || '',
      like: like || 0,
			active: active || 'True'
		}

		const commentUpdateCondition = { _id: req.params.id, user: req.userId }

		updatedComment = await Comment.findOneAndUpdate(
			commentUpdateCondition,
			updatedComment,
			{ new: true }
		)

		// User not authorised to update comment or comment not found
		if (!updatedComment)
			return res.status(401).json({
				success: false,
				message: 'Comment not found or user not authorised'
			})

		res.json({
			success: true,
			message: 'Excellent progress!',
			comment: updatedComment
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route DELETE api/comments
// @desc Delete comment
// @access Private
router.delete('/:id', verifyToken, async (req, res) => {
	try {
		const commentDeleteCondition = { _id: req.params.id, user: req.userId }
		const deletedComment = await Comment.findOneAndDelete(commentDeleteCondition)

		// User not authorised or comment not found
		if (!deletedComment)
			return res.status(401).json({
				success: false,
				message: 'Comment not found or user not authorised'
			})

		res.json({ success: true, comment: deletedComment })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

module.exports = router
