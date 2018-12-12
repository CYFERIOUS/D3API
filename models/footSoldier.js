const mongoose = require('mongoose');
const Joi = require('joi');

const FootSchema = new mongoose.Schema({
	name: {
	    type: String,
	    required: true,
	    minlength: 5,
	    maxlength: 50
  	},
  	isWitch: {
	    type: Boolean,
	    default: false
  	},
  	phone: {
	    type: String,
	    required: true,
	    minlength: 5,
	    maxlength: 50
  	}

});


const FootSoldier = mongoose.model('Soldier',FootSchema);

	function validateSoldier(soldier){
		const schema = {
			name: Joi.string().min(5).max(50).required(),
			isWitch: Joi.boolean().required(),
			phone: Joi.number().min(5).required()

		}
		return Joi.validate(soldier, schema);
	}


	exports.FootSoldier = FootSoldier;
	exports.validate = validateSoldier;