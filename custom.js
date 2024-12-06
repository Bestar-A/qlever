const toggleTheme = () => {
	if (document.body.getAttribute("data-bs-theme") !== "dark") document.body.setAttribute("data-bs-theme", "dark");
	else document.body.setAttribute("data-bs-theme", "light");
};
