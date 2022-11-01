const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')

const Module = require('../models/Module')

// @route GET api/modules
// @desc Get modules
// @access Private
router.get('/', verifyToken, async (req, res) => {
	try {
		const modules = await Module.find({ user: req.userId }).populate('user', [
			'username'
		])
		res.json({ success: true, modules })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route POST api/modules
// @desc Create module
// @access Private
router.post('/', verifyToken, async (req, res) => {
	// console.log(req.body)
	const { title, description, url, status } = req.body

	// Simple validation
	if (!title)
		return res
			.status(400)
			.json({ success: false, message: 'Title is required' })

	try {
		const newModule = new Module({
			title,
			description,
			url: url.startsWith('https://') ? url : `https://${url}`,
			status: status || 'TO LEARN',
			user: req.userId
		})

		await newModule.save()

		res.json({ success: true, message: 'Happy learning!', module: newModule })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route PUT api/modules
// @desc Update module
// @access Private
router.put('/:id', verifyToken, async (req, res) => {
	const { title, description, url, status } = req.body

	// Simple validation
	if (!title)
		return res
			.status(400)
			.json({ success: false, message: 'Title is required' })

	try {
		let updatedModule = {
			title,
			description: description || '',
			url: (url.startsWith('https://') ? url : `https://${url}`) || '',
			status: status || 'TO LEARN'
		}

		const moduleUpdateCondition = { _id: req.params.id, user: req.userId }

		updatedModule = await Module.findOneAndUpdate(
			moduleUpdateCondition,
			updatedModule,
			{ new: true }
		)

		// User not authorised to update module or module not found
		if (!updatedModule)
			return res.status(401).json({
				success: false,
				message: 'Module not found or user not authorised'
			})

		res.json({
			success: true,
			message: 'Excellent progress!',
			module: updatedModule
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

// @route DELETE api/modules
// @desc Delete module
// @access Private
router.delete('/:id', verifyToken, async (req, res) => {
	try {
		const moduleDeleteCondition = { _id: req.params.id, user: req.userId }
		const deletedModule = await Module.findOneAndDelete(moduleDeleteCondition)

		// User not authorised or module not found
		if (!deletedModule)
			return res.status(401).json({
				success: false,
				message: 'Module not found or user not authorised'
			})

		res.json({ success: true, module: deletedModule })
	} catch (error) {
		console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
	}
})

module.exports = router
