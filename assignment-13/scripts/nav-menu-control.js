function toggleNavMenu() {
	var menuButton = document.getElementById("menu-button");
	var navMenu = document.getElementById("small-header-content");
	var mainContent = document.getElementById("content");
	var footer = document.getElementById("footer");

	if (navMenu.style.display === "none" || navMenu.style.display === "") {
		navMenu.style.display = "block";		// show #nav-menu
		menuButton.style.backgroundColor = "#832629";
	} else {
		navMenu.style.display = "none";		// show #nav-menu
		menuButton.style.backgroundColor = "inherit";
	}
};


function toggleSection(sectionID) {
	// by making the sectionID be an argument, I can make one function and use it for all the sections
	var section = document.getElementById(sectionID);

	if (section.style.display === "none" || section.style.display == "") {
		section.style.display = "block";		// show sectionID
	} else {
		section.style.display = "none";			// hide sectionID
	}
}

