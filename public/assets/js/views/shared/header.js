function buildHeader() {	const body = document.querySelector("body");
	const header = document.createElement("header");
	const nav = document.createElement("nav");
	const dungeons = new navLink("Dungeons", "./public/dungeons.html");
	const items = new navLink("Items", "./public/items.html");
	const monsters = new navLink("Monsters", "./public/monsters.html");
	const bosses = new navLink("Bosses", "./public/bosses.html");
	const characters = new navLink("Characters", "./public/characters.html");
	const places = new navLink("Places", "./public/places.html");
	const navLinks = [characters, items, places, monsters, dungeons, bosses];
	const headerImage = document.createElement("img");
	const logoContainer = document.createElement("div");
	const innerHeader = document.createElement("div");
	const ulElement = document.createElement("ul");
	const homeLink = document.createElement("a");

	logoContainer.classList.add("logo-container");
	headerImage.src =
		"./assets/images/white_The-Royal-Hyrule-Crest-logo-SVG-d0t9oy.svg";

	homeLink.setAttribute("href", "./index.html");
	homeLink.appendChild(headerImage);
	navLinks.forEach((link) => {
		let aElement = document.createElement("a");
		let liElement = document.createElement("li");

		aElement.innerText = link.innerText;
		aElement.href = link.url;
		liElement.appendChild(aElement);
		ulElement.appendChild(liElement);
		nav.appendChild(ulElement);
	});

	function navLink(text, url) {
		this.innerText = text;
		this.url = url;
	}

	innerHeader.classList.add("row");
	innerHeader.classList.add("header-row");
	logoContainer.appendChild(homeLink);
	innerHeader.appendChild(logoContainer);
	innerHeader.appendChild(nav);
	header.appendChild(innerHeader);
	body.appendChild(header);

	body.insertBefore(header, body.firstChild);
}

export { buildHeader };
