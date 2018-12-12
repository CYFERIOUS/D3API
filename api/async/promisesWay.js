
// const p = new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve(1);
// 	}, 2000);
// });

// p.then(result => {
// 	console.log("prometeo",result);
// })


// function prometeo(){
	
// 		return ["popo","chichi","nene"];
	
	
// }

// getTurtle(1,(user)=>{
// 	console.log(user.sewerLairName);
// 		getWeapon(user.sewerLairName,(weapons)=>{
// 			console.log(weapons);
// 			getMission(weapons,(missionName)=>{
// 				console.log( missionName.mission );
// 			});
// 	});
// });




getTurtle(1)
	.then(user =>getWeapon(user.sewerLairName))
	.then(weapon =>getMission(weapon[0]))
	.then(missionName=>console.log("missionName",missionName.mission))
	.catch(err => console.log('Error',err.message));


function getTurtle(id){

	return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				console.log("reading from database...");
				resolve({id: id,sewerLairName:"rafael"});
			}, 5000);
	});

	
}


function getWeapon(weaponName){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve( ['sword','nun-chuks','sais'] );
		}, 2000);
	});
}

function getMission(mission){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve( {mission: "missionMutante3"} );
		}, 2000);
	});
	
}