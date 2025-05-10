<<<<<<< HEAD
async function getMonsters() {
	const url = "https://zelda.fanapis.com/api/monsters?limit=50";
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	return data;
}


=======
async function getMonsters() {
	const url = "https://zelda.fanapis.com/api/monsters?limit=50";
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	return data;
}


>>>>>>> 4292a3389fb6175b95e108312200cdc983097d5b
getMonsters();