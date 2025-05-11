/* 			<section class="glide-section">
				<div class="glide">
					<div class="glide__track" data-glide-el="track">
						<ul class="glide__slides">
							<li class="glide__slide">
								<img src="../views/images/5cf4e5b28453cbff37f21cd7347cbb09.jpg" />
							</li>
							<li class="glide__slide">
								<img
									src="../views/images/Legend-of-Zelda-Ocarina-of-Time-Title-Screen-1024x576.png" />
							</li>
							<li class="glide__slide">
								<img src="../views/images/dekutree.png" />
							</li>
						</ul>
					</div>
					<div class="glide__bullets" data-glide-el="controls[nav]">
						<button class="glide__bullet" data-glide-dir="=0"></button>
						<button class="glide__bullet" data-glide-dir="=1"></button>
						<button class="glide__bullet" data-glide-dir="=2"></button>
					</div>
					*/

import { fullwidthHeroSection } from "./public/assets/js/views/js/shared/hero.js";

function indexView() {
	fullwidthHeroSection("home_hero.webp");

	const titles = [
		"Characters",
		"Items",
		"Places",
		"Monsters",
		"Dungeons",
		"Bosses",
	];

	for (let title of titles) {
		const section = document.createElement("section");
		const row = document.createElement("div");
		const columnOne = document.createElement("div");
		const columnTwo = document.createElement("div");
		const h2 = document.createElement("h2");
		const p = document.createElement("p");

		columnOne.classList.add("column-one");
		columnTwo.classList.add("column-two");
		p.classList.add("paragraph-text");

		row.classList.add("row", "multi-column", title.toLowerCase());
		h2.innerText = title;
		p.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

		//columnOne.innerHTML = `<img src="../public/assets/images/homePage/${title.toLowerCase()}.webP" alt="${title} image" />`;

		section.appendChild(row);
		row.appendChild(columnOne);
		row.appendChild(columnTwo);
		columnTwo.appendChild(h2);
		columnTwo.appendChild(p);

		document.querySelector("#main-content").appendChild(section);
	}

	//     <section>
	//     <div class="row multi-column characters">
	//         <div class="column-one"></div>
	//         <div class="column-two">
	//             <h2>Characters</h2>
	//             <p class="paragraph-text">
	//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
	//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
	//                 enim ad minim veniam, quis nostrud exercitation ullamco laboris
	//                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
	//                 reprehenderit in voluptate velit esse cillum dolore eu fugiat
	//                 nulla pariatur. Excepteur sint occaecat cupidatat non proident,
	//                 sunt in culpa qui officia deserunt mollit anim id est laborum.
	//             </p>
	//         </div>
	//     </div>
	// </section>
}

export { indexView };
