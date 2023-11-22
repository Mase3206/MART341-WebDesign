function toggleNavMenu() {
	var navMenu = document.getElementById("nav-menu");
	var mainContent = document.getElementById("content");
	var footer = document.getElementById("footer");

	if (navMenu.style.display === "none" || navMenu.style.display === "") {
		navMenu.style.display = "block";		// show #nav-menu
		mainContent.style.display = "none";		// hide div#content
		navMenu.style.overflow = "scroll";		// make sure any overflow in #nav-menu can be scrolled
		footer.style.display = "none";			// hide footer
	} else {
		navMenu.style.display = "none";			// hide #nav-menu
		mainContent.style.display = "block";	// show div#body
		navMenu.style.overflow = "scroll";		// making sure #nav-menu can be scrolled (even though it is hidden)
		footer.style.display = "block";			// show footer
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

