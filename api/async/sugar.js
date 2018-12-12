


// getTurtle(1)
// 	.then(user =>getWeapon(user.sewerLairName))
// 	.then(weapon =>getMission(weapon[0]))
// 	.then(missionName=>console.log("missionName",missionName.mission))
// 	.catch(err => console.log('Error',err.message));



async function callTurtles(){
	try{
		const turtle = await getTurtle(1);
		const weapon = await getWeapon(turtle.sewerLairName);
		console.log(weapon);
		const mission = await getMission(weapon[0]);
		console.log(mission.mission);
	}catch(err){
		console.log("error",err.message);
	}
	
}
callTurtles();


function getTurtle(id){

	return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				console.log("reading from database...");
				resolve({id: id,sewerLairName:"Donatello"});
			}, 5000);
	});

	
}


function getWeapon(weaponName){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve( ['Technodrome','nun-chuks','sais'] );
			//reject(new Error("fuck you footsoldiers"));
		}, 2000);
	});
}

function getMission(mission){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve( {mission: "missionMutante4"} );
		}, 2000);
	});
	
}