const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongo-mutants', { useNewUrlParser: true })
.then(()=>console.log("is connected and ready to poo mongoMutant"))
.catch(err=>console.log("not connected because there is not mutants pooing",err));

const mutantSchema = new mongoose.Schema({
	name: {type:String, required: true},
	author: {type:String, required: true, trim: true},
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


async function createMutantAnimal(){
	const tmnt = new Mutant({
		name: 'rocksteady',
		author:'   miyimato coco   ',
		tags: ['shuriken', 'Bo'],
		category: 'BIRD',
		isPublished: false,
		price: 15.7
	});
	try{
		const result = await tmnt.save();
		console.log(result);
	}catch(ex){
		for(field in ex.errors){
			console.log(ex.errors[field].message);
		}
	}
	
	
}
createMutantAnimal();

//CRUD OPERATIONS


async function getBy(){
	return await Mutant
	.find({isPublished:true})
	.or([ 
		{price: {$gte:15}},
		{name: /.*by.*/i }
	])
	.sort({price: -1})
	.select({name:1, author:1, price:1});
	
}


async function getPrice(){
	return await Mutant
	.find({tags:{$in:['nun-chucks','shuriken']}, isPublished:true})
	.sort({price: -1})
	.select({name:1, author:1, price:1});
	
}

async function getMutant(){
	return await Mutant
	.find({tags:'Katana', isPublished:true})
	.sort({name: 1})
	.select({name:1, author:1});
	
}


async function updateMutant(id) {

	await Mutant.findOneAndUpdate(id, {$set:{author:"Murakami-Wolf-Swenson",name:'mata mata'}}, {new:true}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    console.log(doc);
	});
}

async function remove(id) {

	await Mutant.findOneAndRemove(id, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    console.log(doc);
	});
}





//VALIDATE OPERATIONS




async function runLikehell(){
	//const way = await getMutant();
	//const price = await getPrice();
	//const by = await getBy()
	//console.log("way",way);
	//console.log("way2",price);
	//console.log("update");
	//updateMutant('5a68fdc3615eda645bc6bdec');
	//remove('5a68ff090c553064a218a547');
	//console.log("way3",by);

}




setTimeout(function(){ runLikehell(); }, 3000);


