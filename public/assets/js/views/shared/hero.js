function fullwidthHeroSection(imgSrc) {

	const heroSection = document.querySelector(".full-width-hero-section");
	const heroImage = document.createElement("img");
	
	heroImage.src = `https://glaplantwd.github.io/zeldaMVC/public/assets/images/heroImages/${imgSrc}`;
	heroImage.classList.add("hero-image");
	heroImage.alt = "Legend of Zelda Link Fan Art Concept Illustration";
	
	if(!heroSection){
		
	const fullwidthHeroSection = document.createElement("section");
	const fullwidthHero = document.createElement("div");
	
	fullwidthHeroSection.classList.add("full-width-hero-section");
	fullwidthHero.classList.add("row", "full-width-hero");
	fullwidthHero.appendChild(heroImage);	
	fullwidthHeroSection.appendChild(fullwidthHero);
	
	document.querySelector("#main-content").appendChild(fullwidthHeroSection);
}
}


export { fullwidthHeroSection };