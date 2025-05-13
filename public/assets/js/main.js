//IMPORT CONTROLLERS
import { charactersController } from "/zeldaMVC/public/assets/js/controllers/charactersController.js";
import { bossesController } from "/zeldaMVC/public/assets/js/controllers/bossesController.js";
import { itemsController } from "/zeldaMVC/public/assets/js/controllers/itemsController.js";
import { monstersController } from "/zeldaMVC/public/assets/js/controllers/monstersController.js";
import { placesController } from "/zeldaMVC/public/assets/js/controllers/placesController.js";
import { dungeonsController } from "/zeldaMVC/public/assets/js/controllers/dungeonsController.js";
import { indexController } from "/zeldaMVC/public/assets/js/controllers/indexController.js";

//IMPORT SHARED VIEWS

import { buildHeader } from "./views/shared/header.js";


document.addEventListener("DOMContentLoaded", () => {
	buildHeader();

	const path = window.location.pathname;

	switch (path) {
		case "/":
		case "/index.html":
			indexController();
			break;
		case "./characters.html":
			charactersController();
			break;
		case "./bosses.html":
			bossesController();
			break;
		case "./items.html":
			itemsController();
			break;
		case "./monsters.html":
			monstersController();
			break;
		case "./places.html":
			placesController();
			break;
		case "./dungeons.html":
			dungeonsController();
			break;
		default:
			console.error("Page not found");
			break;
	}
});
