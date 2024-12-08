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
			const turn = () => {
				const content = Object.values(data);
				content.map((datum) => {
					const writing = (text) => {
						wrapper.textContent = text;
					};
					setTimeout(writing(datum, 1000));
				});
				setTimeout(turn, 1000);
			};
			turn();
		}
	};

	typing();
});
