async function getMonsters() {
	const url = "https://zelda.fanapis.com/api/monsters?limit=50";
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	return data;
}


getMonsters();