function toggleNavMenu() {
	var navMenu = document.getElementById("nav-menu");
	var mainContent = document.getElementById("content");
	var footer = document.getElementById("footer");

	if (navMenu.style.display === "none" || navMenu.style.display === "") {
		navMenu.style.display = "block";
		mainContent.style.display = "none";
		navMenu.style.overflow = "scroll";
		footer.style.display = "none";
	} else {
		navMenu.style.display = "none";
		mainContent.style.display = "block";
		navMenu.style.overflow = "scroll";
		footer.style.display = "block";
	}
};


function toggleSection(sectionID) {
	var section = document.getElementById(sectionID);

	if (section.style.display === "none" || section.style.display == "") {
		section.style.display = "block";
	} else {
		section.style.display = "none";
	}
}

