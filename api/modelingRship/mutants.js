const mongoose = require('mongoose');
const Joi = require('joi');
mongoose.connect('mongodb://localhost:27017/apid3Test', { useNewUrlParser: true })
.then(()=>console.log("is connected and ready to poo mongoExcercises Mutant"))
.catch(err=>console.log("not connected because is not pooing2 mutant",err));

const Antagonico= require('../models/antagonistModel');
const Mutanto = require('../models/mutantModel');


async function createMutantAnimal(name,animals){
	const mutant = new Mutanto.Mutagen({
		name,
		animals
	});

	const result = await mutant.save();

	console.log(result);
}


createMutantAnimal("punkFrogs12",
	[
		new Antagonico.Enemies({name: "attila the frog", clan: "foot clan"}),
		new Antagonico.Enemies({name: "attila the frog4", clan: "foot clanPOpo"})
	]);

async function getAnimals(){
	const mutants = await Animal
	.find({name:'Splinter', isReady:true})
	.limit(10)
	.sort({ name : 1})
	.select({name:1, weapons:1});
	console.log(mutants);
}
//getAnimals();


async function countMutants(){
	const mutants = await Animal
	.find({name:'Splinter', isReady:true})
	.limit(10)
	.sort({ name : 1})
	.count();
	console.log("mutants",mutants);
}
//countMutants();