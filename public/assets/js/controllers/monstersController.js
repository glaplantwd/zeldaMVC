import { monstersView } from "../views/js/monstersView.js";



function monstersController() {
	console.log("monstersController loaded");
	const main = document.querySelector("main");
	monstersView();
}

export { monstersController };