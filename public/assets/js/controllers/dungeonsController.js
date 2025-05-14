import { dungeonsView } from "../views/js/dungeonsView.js";



function dungeonsController() {
	console.log("dungeonsController loaded");
	const main = document.querySelector("main");
	dungeonsView();
}

export { dungeonsController };