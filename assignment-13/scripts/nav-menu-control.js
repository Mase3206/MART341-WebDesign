function toggleNavMenu() {
	var menuButton = document.getElementById("menu-button");
	var navMenu = document.getElementById("small-header-content");
	var mainContent = document.getElementById("content");
	var footer = document.getElementById("footer");

	if (navMenu.style.display === "none" || navMenu.style.display === "") {
		navMenu.style.display = "block";	// show #nav-menu
		menuButton.style.backgroundColor = "#832629";
	} else {
		navMenu.style.display = "none";		// show #nav-menu
		menuButton.style.backgroundColor = "inherit";
	}
};
