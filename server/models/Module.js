const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ModuleSchema = new Schema({//skill needs to learn
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	url: {
		type: String
	},
	status: {
		type: String,
		enum: ['TO LEARN', 'LEARNING', 'LEARNED'] //only within 3 types
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users' //connect to users table/collection
	}
})

module.exports = mongoose.model('modules', ModuleSchema)
