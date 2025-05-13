//IMPORT CONTROLLERS
import { charactersController } from "/zeldaMVC/public/assets/js/controllers/charactersController.js";
import { bossesController } from "/zeldaMVC/public/assets/js/controllers/bossesController.js";
import { itemsController } from "/zeldaMVC/public/assets/js/controllers/itemsController.js";
import { monstersController } from "/zeldaMVC/public/assets/js/controllers/monstersController.js";
import { placesController } from "/zeldaMVC/public/assets/js/controllers/placesController.js";
import { dungeonsController } from "/zeldaMVC/public/assets/js/controllers/dungeonsController.js";
import { indexController } from "/zeldaMVC/public/assets/js/controllers/indexController.js";

//IMPORT SHARED VIEWS

import { buildHeader } from "/zeldaMVC/public/assets/js/views/shared/header.js";


document.addEventListener("DOMContentLoaded", () => {
	buildHeader();

	const path = window.location.pathname;
console.log(path);
	switch (path) {
		case "/":
		case "/index.html":
			indexController();
			break;
		case "/zeldaMVC/public/characters.html":
			charactersController();
			break;
		case "/zeldaMVC/public/bosses.html":
			bossesController();
			break;
		case "/zeldaMVC/public/items.html":
			itemsController();
			break;
		case "/zeldaMVC/public/monsters.html":
			monstersController();
			break;
		case "/zeldaMVC/public/places.html":
			placesController();
			break;
		case "/zeldaMVC/public/dungeons.html":
			dungeonsController();
			break;
		default:
			console.error("Page not found");
			break;
	}
});
