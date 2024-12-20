const toggleTheme = () => {
	if (document.body.getAttribute("data-bs-theme") !== "dark") document.body.setAttribute("data-bs-theme", "dark");
	else document.body.setAttribute("data-bs-theme", "light");
};

document.addEventListener("DOMContentLoaded", () => {
	var carouselIdx = 0;

	const particleBackElem = document.querySelector("#particle-js");
	const height = parseFloat(window.getComputedStyle(document.querySelector("#main-div")).height);
	const winHeight = window.innerHeight;
	const setHeight = Math.max(height, winHeight);

	console.log(winHeight, height, setHeight);
	if (particleBackElem) {
		particleBackElem.style.height = setHeight + "px";
	}
	// Typing Effect
	const typing = () => {
		const elements = document.getElementsByClassName("anim-type");

		for (let i = 0; i < elements.length; i++) {
			const wrapper = elements[i];
			const data = JSON.parse(wrapper.getAttribute("data"));
			const content = Object.values(data);

			const typeAndDelete = (word, index = 0) => {
				if (index <= word.length) {
					wrapper.textContent = word.substring(0, index); // Type out the word
					setTimeout(() => typeAndDelete(word, index + 1), 150); // Typing speed
				} else {
					setTimeout(() => deleteWord(word, word.length), 3000);
				}
			};

			const deleteWord = (word, index) => {
				if (index >= 0) {
					wrapper.textContent = word.substring(0, index); // Delete one character at a time
					setTimeout(() => deleteWord(word, index - 1), 100); // Deletion speed
				} else {
					const nextIndex = (content.indexOf(word) + 1) % content.length;
					setTimeout(() => {
						typeAndDelete(content[nextIndex]);
					}, 500); // Pause before next word
				}
			};

			typeAndDelete(content[0]);
		}
	};

	// Scroll Effect
	const scrollEffect = () => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Element is in the viewport
					entry.target.classList.add("active");
					// const videos = entry.target.querySelectorAll("video");
					// if (videos.length > 0) {
					// 	console.log(videos[carouselIdx]);
					// 	videos[carouselIdx].setAttribute("autoplay", true);
					// 	setTimeout(() => {
					// 		videos[carouselIdx].play();
					// 	}, 1000);
					// }
				} else {
					// Element is out of the viewport (optional, if you want to remove the class)
					// entry.target.classList.remove("active");
				}
			});
		});

		// Select all elements with the '.anim-scroll' class
		const elements = document.querySelectorAll(".anim-scroll");
		elements.forEach((element) => {
			observer.observe(element); // Start observing each element
		});
	};

	// Staff Avatar Effect
	const blueEffect = (target) => {
		const divs = document.querySelectorAll(".staff-div");

		divs.forEach((div) => {
			div.addEventListener("mouseover", () => {
				// Add 'active' to this div and 'inactive' to others
				div.classList.add("active");
				divs.forEach((otherDiv) => {
					if (otherDiv !== div) {
						otherDiv.classList.add("inactive");
					}
				});
			});

			div.addEventListener("mouseout", () => {
				// Remove 'active' from this div and 'inactive' from all
				div.classList.remove("active");
				divs.forEach((otherDiv) => {
					otherDiv.classList.remove("inactive");
				});
			});
		});
	};

	blueEffect();
	// Call the scroll effect function
	scrollEffect();

	setTimeout(typing, 1500);
});
