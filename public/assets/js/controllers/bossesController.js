import { bossesView } from "../views/js/bossesView.js";



function bossesController() {
	console.log("bossesController loaded");
	const main = document.querySelector("main");
	bossesView();
}

export { bossesController };