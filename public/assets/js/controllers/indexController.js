import { indexView } from "../views/js/indexView.js";



function indexController() {
	console.log("indexController loaded");
	const main = document.querySelector("main");
	indexView();
}

export { indexController };
