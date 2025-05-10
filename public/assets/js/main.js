<<<<<<< HEAD
//IMPORT CONTROLLERSimport { indexController } from "./controllers/indexController.js";
import { charactersController } from "./controllers/charactersController.js";
import { bossesController } from "./controllers/bossesController.js";
import { itemsController } from "./controllers/itemsController.js";
import { monstersController } from "./controllers/monstersController.js";
import { placesController } from "./controllers/placesController.js";
import { dungeonsController } from "./controllers/dungeonsController.js";
import { indexController } from "./controllers/indexController.js";

//IMPORT SHARED VIEWS

import { buildHeader } from "./views/shared/header.js";


document.addEventListener("DOMContentLoaded", () => {
	buildHeader();

	const path = window.location.pathname;

	switch (path) {
		case "/":
		case "/public/index.html":
			indexController();
			break;
		case "/public/characters.html":
			charactersController();
			break;
		case "/public/bosses.html":
			bossesController();
			break;
		case "/public/items.html":
			itemsController();
			break;
		case "/public/monsters.html":
			monstersController();
			break;
		case "/public/places.html":
			placesController();
			break;
		case "/public/dungeons.html":
			dungeonsController();
			break;
		default:
			console.error("Page not found");
			break;
	}
});
=======
//IMPORT CONTROLLERSimport { indexController } from "./controllers/indexController.js";
import { charactersController } from "./controllers/charactersController.js";
import { bossesController } from "./controllers/bossesController.js";
import { itemsController } from "./controllers/itemsController.js";
import { monstersController } from "./controllers/monstersController.js";
import { placesController } from "./controllers/placesController.js";
import { dungeonsController } from "./controllers/dungeonsController.js";
import { indexController } from "./controllers/indexController.js";

//IMPORT SHARED VIEWS

import { buildHeader } from "./views/shared/header.js";


document.addEventListener("DOMContentLoaded", () => {
	buildHeader();

	const path = window.location.pathname;

	switch (path) {
		case "/":
		case "/public/index.html":
			indexController();
			break;
		case "/public/characters.html":
			charactersController();
			break;
		case "/public/bosses.html":
			bossesController();
			break;
		case "/public/items.html":
			itemsController();
			break;
		case "/public/monsters.html":
			monstersController();
			break;
		case "/public/places.html":
			placesController();
			break;
		case "/public/dungeons.html":
			dungeonsController();
			break;
		default:
			console.error("Page not found");
			break;
	}
});
>>>>>>> 4292a3389fb6175b95e108312200cdc983097d5b
