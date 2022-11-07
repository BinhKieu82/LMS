const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')

const Thread = require('../models/Thread')

// @route GET api/threads
// @desc Get threads
// @access Public
router.get('/', async (req, res) => {
	try {
		// const threads = await Thread.find({ user: req.userId }).populate('user', [
		// 	'username'
		// ])
		const threads = await Thread.find()
		res.json({ success: true, threads })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route POST api/threads
// @desc Create thread
// @access Private
router.post('/', verifyToken, async (req, res) => {
  console.log(req.body)
	const { title, slug, content, like, active } = req.body
	// Simple validation
	if (!title)
		return res
			.status(400)
			.json({ success: false, message: 'Title is required' })

	try {
		const newThread = new Thread({
			title,
      slug,
			content,
			like,
			active,
			user: req.userId
		})

		await newThread.save()

		res.json({ success: true, message: 'Happy writing!', thread: newThread })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route PUT api/threads
// @desc Update thread
// @access Private
router.put('/:id', verifyToken, async (req, res) => {
  // console.log(req.body, req.params.id)
	const { title, slug, content, like, active } = req.body

	// Simple validation
	if (!title)
		return res
			.status(400)
			.json({ success: false, message: 'Title is required' })

	try {
		let updatedThread = {
			title,
			slug: slug || '',
      content: content || '',
      like: like || 0,
			active: active || 'True'
		}

		const threadUpdateCondition = { _id: req.params.id, user: req.userId }

		updatedThread = await Thread.findOneAndUpdate(
			threadUpdateCondition,
			updatedThread,
			{ new: true }
		)

		// User not authorised to update thread or thread not found
		if (!updatedThread)
			return res.status(401).json({
				success: false,
				message: 'Thread not found or user not authorised'
			})

		res.json({
			success: true,
			message: 'Excellent progress!',
			thread: updatedThread
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route DELETE api/threads
// @desc Delete thread
// @access Private
router.delete('/:id', verifyToken, async (req, res) => {
	try {
		const threadDeleteCondition = { _id: req.params.id, user: req.userId }
		const deletedThread = await Thread.findOneAndDelete(threadDeleteCondition)

		// User not authorised or thread not found
		if (!deletedThread)
			return res.status(401).json({
				success: false,
				message: 'Thread not found or user not authorised'
			})

		res.json({ success: true, thread: deletedThread })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

module.exports = router
