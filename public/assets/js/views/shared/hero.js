function fullwidthHeroSection(imgSrc) {

	if(!imgSrc) return;
	
	const heroSection = document.querySelector(".full-width-hero-section");
	const heroImage = document.createElement("img");
	
	heroImage.src = `https://glaplantwd.github.io/zeldaMVC/public/assets/images/heroImages/${imgSrc}`;
	heroImage.classList.add("hero-image");
	heroImage.alt = "Legend of Zelda Link Fan Art Concept Illustration";
	
	if(heroSection){
		heroSection.innerhtml = '';
	}
	else{
		
		const fullwidthHeroSection = document.createElement("section");
		fullwidthHeroSection.classList.add("full-width-hero-section");
		document.querySelector("#main-content").appendChild(fullwidthHeroSection);
	}

	const fullwidthHero = document.createElement("div");
	
	fullwidthHero.classList.add("row", "full-width-hero");
	fullwidthHero.appendChild(heroImage);	
	fullwidthHeroSection.appendChild(fullwidthHero);

	

}


export { fullwidthHeroSection };