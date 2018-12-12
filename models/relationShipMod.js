const mongoose = require('mongoose');
const Joi = require('joi');

const Allies = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Aliados = mongoose.model('Allies',Allies);

// const Support = mongoose.model('Support', new mongoose.Schema({
//   name: String,
//   author: {
//   	type: mongoose.Schema.Types.ObjectId,
//   	ref:'Allies'
//  }
// }));

const Support = mongoose.model('Support', new mongoose.Schema({
  name: String,
  authors: [Allies]
}));


	// function validateSoldier(soldier){
	// 	const schema = {
	// 		name: Joi.string().min(5).max(50).required(),
	// 		isWitch: Joi.boolean().required(),
	// 		phone: Joi.number().min(5).required()

	// 	}
	// 	return Joi.validate(soldier, schema);
	// }


	exports.Allies = Aliados;
	exports.Support = Support;