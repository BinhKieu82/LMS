const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThreadSchema = new Schema({
  title: {
	  type: String,
		required: true
	},
  slug: {
		type: String
	},
  content: {
		type: String
	},
  like: {
		type: Number
	},
	createAt: {
		type: Date,
		default: Date.now
	},
	active: {
		type: Boolean
  },
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users' //connect to users table/collection
	}
})

module.exports = mongoose.model('threads', ThreadSchema)



