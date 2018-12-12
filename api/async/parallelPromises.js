const p1 = new Promise((resolve)=>{
	setTimeout(()=>{
		console.log("resolving one...");
		resolve(1);
	}, 5000);
});
const p2 = new Promise((resolve)=>{
	setTimeout(()=>{
		console.log("resolving two...");
		resolve(2);
	}, 5000);
});

Promise.all([p1, p2]).then(result=>console.log(result));