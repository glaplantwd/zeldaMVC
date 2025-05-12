//IMPORT CONTROLLERSimport { indexController } from "./controllers/indexController.js";
import { charactersController } from "./assets/js/controllers/charactersController.js";
import { bossesController } from "./assets/js/controllers/bossesController.js";
import { itemsController } from "./assets/js/controllers/itemsController.js";
import { monstersController } from "./assets/js/controllers/monstersController.js";
import { placesController } from "./assets/js/controllers/placesController.js";
import { dungeonsController } from "./assets/js/controllers/dungeonsController.js";
import { indexController } from "./assets/js/controllers/indexController.js";

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
