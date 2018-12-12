console.log("before");
getTurtle(1,displayTurtle);
console.log("After");

function displayMission(missionName){
	console.log( missionName.mission );
}

function displayWeapon(weapons){
	console.log(weapons);
	getMission(weapons,displayMission);
}

function displayTurtle(user){
	console.log(user.sewerLairName);
		getWeapon(user.sewerLairName,displayWeapon);
}


function getTurtle(id,callback){
	setTimeout(()=>{
		console.log("reading from database...");
		callback({id: id,sewerLairName:"splinter"});
	}, 2000);
}


function getWeapon(username,callback){
	setTimeout(()=>{
		callback( ['shuriken','bo','sais'] );
	}, 2000);
}

function getMission(mission,callback){
	setTimeout(()=>{
		callback( {mission: "missionMutante"} );
	}, 2000);
	
}