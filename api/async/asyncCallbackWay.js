
getTurtle(1,(user)=>{
	console.log(user.sewerLairName);
		getWeapon(user.sewerLairName,(weapons)=>{
			console.log(weapons);
			getMission(weapons,(missionName)=>{
				console.log( missionName.mission );
			});
	});
});


function getTurtle(id,callback){
	setTimeout(()=>{
		console.log("reading from database...");
		callback({id: id,sewerLairName:"leonardo"});
	}, 2000);
}


function getWeapon(username,callback){
	setTimeout(()=>{
		callback( ['sword','bo','sais'] );
	}, 2000);
}

function getMission(mission,callback){
	setTimeout(()=>{
		callback( {mission: "missionMutante2"} );
	}, 2000);
	
}