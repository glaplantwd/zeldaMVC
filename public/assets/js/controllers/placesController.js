import { placesView } from "../views/js/placesView.js";



function placesController() {
	console.log("placesController loaded");
	const main = document.querySelector("main");
	placesView();
}

export { placesController };