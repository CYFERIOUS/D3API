const mongoose = require('mongoose');
var path = require('path');
var io = require('socket.io');
var socket = io();
const Joi = require('joi');
//const attack = require('./ninjaAttack');
//const attack2 = require('./shuriken');


module.exports = function(app){

	const mutantSchema = new mongoose.Schema({
	name: {type:String, required: true},
	author: {type:String, required: true},
	tags: {
			type: Array,
			validate: {
				isAsync: true,
				validator: function(v, callback){
					setTimeout(()=>{
						const result = v && v.length > 0;
						callback(result);
					},4000);
			
				},message: "An arsenal must have at least one weapon "
			}
		},
	category:{
		type: String,
		required: true,
		enum:['bird', 'reptile', 'mammal'],
		lowercase:true
		
	},
	date: { type: Date, default: Date.now },
	isPublished: Boolean,
	price:{
		type: Number,
		required: function (){ return this.isPublished},
		min:10,
		max:200,
		get: v=>Math.round(v),
		set: v=>Math.round(v)
	} 

});

const Mutant = mongoose.model('Mutant',mutantSchema);


	var dataArray1 = [30,35,45,55,70];
	var dataArray2 = [50,55,45,35,200,25,25,40];

  

   app.get('/', (req, res) => {
		res.send("CYBERLOADING DATA FOR FERCHOV BRAIN")
 	});

	

	
	app.get('/turtles/:id', async (req, res) => {

		const turtle = await Mutant.findById(req.params.id)
		if(!turtle) res.status(404).send('SPLINTER HASNT FOUND THE TURTLE');
		res.send(turtle);
	});

	app.get('/turtles/', async(req,res)=>{
		const turtles = await Mutant.find().sort('name');
		res.send(turtles);
	});
	

	
	app.post('/turtles/', async(req, res)=>{

		const { error } = validateTurtle(req.body);

		if(error){
			res.status(400).send(error.details[0].message);
			return;
		}

		let turtle = new Mutant({
			name: req.body.name,
			author: req.body.author,
			tags: req.body.tags,
			category: req.body.category,
			isPublished: req.body.isPublished,
			price: req.body.price

		});
		console.log("requestFuck",req.body.author);
		turtle = await turtle.save();
		console.log("requestFuck",req.body.author);
		console.log("requestFuck2",turtle);

		res.send(turtle);
	});

	app.put('/turtles/:id', async(req, res) => {


		const { error } = validateTurtle(req.body);
		console.log({error})

		if(error){
			res.status(400).send(error.details[0].message);
			return;
		}

		const turtle = await Mutant.findOneAndUpdate(req.params.id, 
			{$set:{
				name: req.body.name,
				author: req.body.author,
				tags: req.body.tags,
				category: req.body.category,
				isPublished: req.body.isPublished,
				price: req.body.price
			}}, 
			{new:true}, function(err, doc){
	    if(err){
	        console.log("Something wrong when updating data!");
	    }
	    console.log(doc);
		});

		if(!turtle) res.status(404).send('SPLINTER HASNT FOUND THE TURTLE');

		res.send(turtle);

	});

	app.delete('/turtles/:id',async(req, res)=>{

		const turtle = await Mutant.findOneAndRemove(req.params.id, function(err, doc){
	    if(err){
	        console.log("Something wrong when updating data!");
	    }
	    console.log(doc);
		});

		if(!turtle) res.status(404).send('SPLINTER HASNT FOUND THE TURTLE');

		res.send(turtle);
	});

	function validateTurtle(turtle){
		const schema = {
			name: Joi.string().min(3).required(),
			author: Joi.string().min(3).required(),
			tags: [Joi.string()],
			category: Joi.string().min(3).required(),
			isPublished: Joi.boolean().required(),
			price: Joi.number().min(1).max(100).required()

		}
		
		return Joi.validate(turtle, schema);

	}
	//app.use(attack2);
	//app.use(attack);

	
}
