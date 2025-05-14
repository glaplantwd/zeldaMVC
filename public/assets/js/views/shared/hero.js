function fullwidthHeroSection(imgSrc) {

	if(!imgSrc) return;
	
	let heroSection = document.querySelector(".full-width-hero-section");
	const imagePath = `https://glaplantwd.github.io/zeldaMVC/public/assets/images/heroImages/${imgSrc}`;
	
	
	if(heroSection){
		heroSection.innerHTML = '';
	}
	else{
		
		heroSection = document.createElement("section");
		heroSection.classList.add("full-width-hero-section");
		document.querySelector("#main-content").appendChild(heroSection);
	}

	const fullwidthHero = document.createElement("div");
	fullwidthHero.classList.add("row", "full-width-hero");
	
	const heroImage = document.createElement("img");
	heroImage.classList.add("hero-image");
	heroImage.alt = "Legend of Zelda Link Fan Art Concept Illustration";
	heroImage.src = imagePath ;
	
	fullwidthHero.appendChild(heroImage);	
	heroSection.appendChild(fullwidthHero);

	

}


export { fullwidthHeroSection };