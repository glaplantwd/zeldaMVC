import { charactersView } from "../views/js/charactersView.js";



function charactersController() {
	console.log("charactersController loaded");
	const main = document.querySelector("main");
	charactersView();
}

export { charactersController };