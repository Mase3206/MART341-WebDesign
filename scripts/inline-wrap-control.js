
// This function updates every time the window is resized.
// It checks if #web-interface-p, the text next to the web
// interface image, is taller than the the image next to
// it. If it is, this will change some values to allow the
// text to cleanly wrap under the image, as long as the
// text is not already set to display as "block".

$(window).resize(function() {
	var imageDiv = document.getElementById("web-interface-img");
	var textDiv = document.getElementById("web-interface-p");

	// find the image and text height *right now* using jQuery
	var imageHeight = $(imageDiv).height();
	var textHeight = $(textDiv).height();

	// find computed display setting of #web-interface-p
	var textComputedDisplay = getComputedStyle(textDiv, null).display;


	if (textComputedDisplay != "block") {
		if (textHeight > imageHeight) {
			textDiv.style.display = "block";
			textDiv.style.width = "100%";
			imageDiv.style.width = "100%";
		} else if (textHeight < imageHeight) {
			textDiv.style.display = "inline-block";
			textDiv.style.width = "calc(100% - 526px)";
			imageDiv.style.width = "500px";
		}
	}
});


function initialize() {
	var imageDiv = document.getElementById("web-interface-img");
	var textDiv = document.getElementById("web-interface-p");

	// find the image and text height *right now* using jQuery
	var imageHeight = $(imageDiv).height();
	var textHeight = $(textDiv).height();

	// find computed display setting of #web-interface-p
	var textComputedDisplay = getComputedStyle(textDiv, null).display;


	if (textComputedDisplay != "block") {
		if (textHeight > imageHeight) {
			textDiv.style.display = "block";
			textDiv.style.width = "100%";
			imageDiv.style.width = "100%";
		} else if (textHeight < imageHeight) {
			textDiv.style.display = "inline-block";
			textDiv.style.width = "calc(100% - 526px)";
			imageDiv.style.width = "500px";
		}
	}
}

initialize();