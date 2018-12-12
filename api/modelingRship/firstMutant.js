const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/apid3Test', { useNewUrlParser: true })
.then(()=>console.log("is connected and ready to poo"))
.catch(err=>console.log("not connected because is not pooing",err));


const weaponSchema = new mongoose.Schema({
	name: String,
	animal: String,
	weapons: [ String ],
	date: { type: Date, default: Date.now },
	isReady: Boolean

});

///Class:Animal. object:mutant

const Animal = mongoose.model('Animal',weaponSchema);

async function createMutantAnimal(){
	const mutant = new Animal({
		name: 'Usagi Yoshimbo',
		animal:'Rabbit',
		weapons: ['sword','nunchaks'],
		isReady: true
	});

	const result = await mutant.save();
	console.log(result);
}
//createMutantAnimal();

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