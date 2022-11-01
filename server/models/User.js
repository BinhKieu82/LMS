const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({ //collection name - table
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	thread: {
		type: Schema.Types.ObjectId,
		ref: 'threads' //connect to threads table/collection
	}
})

module.exports = mongoose.model('users', UserSchema)
