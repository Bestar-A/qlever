const toggleTheme = () => {
	if (document.body.getAttribute("data-bs-theme") !== "dark") document.body.setAttribute("data-bs-theme", "dark");
	else document.body.setAttribute("data-bs-theme", "light");
};

document.addEventListener("DOMContentLoaded", () => {
	// Typing Effect
	const typing = () => {
		const elements = document.getElementsByClassName("anim-type");

		for (let i = 0; i < elements.length; i++) {
			const wrapper = elements[i];
			const data = JSON.parse(wrapper.getAttribute("data"));
			const content = Object.values(data);

			// Function to handle the typing and deleting effect
			const typeAndDelete = (word, index = 0) => {
				if (index <= word.length) {
					wrapper.textContent = word.substring(0, index); // Type out the word
					setTimeout(() => typeAndDelete(word, index + 1), 150); // Typing speed
				} else {
					// Pause before deleting
					setTimeout(() => deleteWord(word, word.length), 3000);
				}
			};

			const deleteWord = (word, index) => {
				if (index >= 0) {
					wrapper.textContent = word.substring(0, index); // Delete one character at a time
					setTimeout(() => deleteWord(word, index - 1), 100); // Deletion speed
				} else {
					// Move to the next word after deleting
					const nextIndex = (content.indexOf(word) + 1) % content.length;
					setTimeout(() => {
						typeAndDelete(content[nextIndex]);
					}, 500); // Pause before next word
				}
			};

			// Start the animation with the first word
			typeAndDelete(content[0]);
		}
	};

	typing();
});
