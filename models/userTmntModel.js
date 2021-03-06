const mongoose = require('mongoose');
const Joi = require('joi');
const Joi_p = require('joi-password-complexity');



const TmntUser = mongoose.model('TmntUser',new mongoose.Schema({
  name:{
  	type:String,
  	required: true,
  	minlength: 5,
  	maxlength: 50
  },
  email:{
  	type:String,
  	required: true,
  	minlength: 5,
  	maxlength: 255,
  	unique: true
  },
  password:{
  	type:String,
  	required: true,
  	minlength: 5,
  	maxlength: 1024
  }

}));


function validateUser(user) {


   const joi_params = {
      min: 10,
      max: 30,
      lowerCase: 1,
      upperCase: 1,
      numeric: 1,
      symbol: 1,
      requirementCount: 2,
    }

	const schema = {
		name: Joi.string().min(5).max(50).required(),
		email: Joi.string().min(5).max(255).required().email(),
		password: new Joi_p(joi_params)
	}

	return Joi.validate(user,schema);
}


exports.TmntUser  = TmntUser;
exports.validate = validateUser;