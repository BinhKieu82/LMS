const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
	comment: {
		type: String
	},
	createAt: {
		type: Date,
		default: Date.now
	},
	active: {
		type: Boolean
  },
	thread: {
		type: Schema.Types.ObjectId,
    ref: 'threads' //connect to threads table/collection
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users' //connect to users table/collection
	}
})

module.exports = mongoose.model('comments', CommentSchema)