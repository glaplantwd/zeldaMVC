import { itemsView } from "../views/js/itemsView.js";



function itemsController() {
	console.log("itemsController loaded");
	const main = document.querySelector("main");
	itemsView();
}

export { itemsController };

