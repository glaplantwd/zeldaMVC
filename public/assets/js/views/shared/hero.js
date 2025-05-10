<<<<<<< HEAD
function fullwidthHeroSection($imgSrc) {
	const fullwidthHeroSection = document.createElement("section");
	const fullwidthHero = document.createElement("div");
	const heroImage = document.createElement("img");
	

	fullwidthHeroSection.classList.add("full-width-hero-section");
	fullwidthHero.classList.add("row", "full-width-hero");
	heroImage.classList.add("hero-image");

	fullwidthHero.appendChild(heroImage);
	heroImage.src = `../public/assets/images/heroImages/${$imgSrc}`;
	heroImage.alt = "Legend of Zelda Link Fan Art Concept Illustration";	
	fullwidthHeroSection.appendChild(fullwidthHero);
	document.querySelector("#main-content").appendChild(fullwidthHeroSection);
}


=======
function fullwidthHeroSection($imgSrc) {
	const fullwidthHeroSection = document.createElement("section");
	const fullwidthHero = document.createElement("div");
	const heroImage = document.createElement("img");
	

	fullwidthHeroSection.classList.add("full-width-hero-section");
	fullwidthHero.classList.add("row", "full-width-hero");
	heroImage.classList.add("hero-image");

	fullwidthHero.appendChild(heroImage);
	heroImage.src = `../public/assets/images/heroImages/${$imgSrc}`;
	heroImage.alt = "Legend of Zelda Link Fan Art Concept Illustration";	
	fullwidthHeroSection.appendChild(fullwidthHero);
	document.querySelector("#main-content").appendChild(fullwidthHeroSection);
}


>>>>>>> 4292a3389fb6175b95e108312200cdc983097d5b
export { fullwidthHeroSection };