var divider = document.getElementById("divider");
var root = document.getElementById("navbar");

function toggleAssignmentsMenu(forceHide) {
	var assignmentsCollapse = document.getElementById("assignments-collapse");
	var assignmentsTitle = document.getElementById("assignments-title");

	if (assignmentsCollapse.style.display === "none" || assignmentsCollapse.style.display === "") {
		assignmentsCollapse.style.display = "block";
		assignmentsTitle.style.fontWeight = "400";
		assignmentsTitle.style.borderStyle = "inset";
		divider.style.marginBottom = "6px";
		root.style.minWidth = "500px";
	} else {
		assignmentsCollapse.style.display = "none";
		assignmentsTitle.style.fontWeight = "400";
		assignmentsTitle.style.borderStyle = "";
		divider.style.marginBottom = "32.5px";
		root.style.minWidth = "100%";
	}

	if (forceHide === true) {
		assignmentsCollapse.style.display = "none";
		assignmentsTitle.style.fontWeight = "400";
		assignmentsTitle.style.borderStyle = "";
	}
}


function toggleClusterComputingMenu(forceHide) {
	var ccCollapse = document.getElementById("cluster-computing-collapse");
	var ccTitle = document.getElementById("cluster-computing-title");

	if (ccCollapse.style.display === "none" || ccCollapse.style.display === "") {
		ccCollapse.style.display = "block";
		ccTitle.style.fontWeight = "400";
		ccTitle.style.borderStyle = "inset";
		divider.style.marginBottom = "6px";
		root.style.minWidth = "500px";
	} else {
		ccCollapse.style.display = "none";
		ccTitle.style.fontWeight = "400";
		ccTitle.style.borderStyle = "";
		divider.style.marginBottom = "32.5px";
		root.style.minWidth = "100%";
	}

	if (forceHide === true) {
		ccCollapse.style.display = "none";
		ccTitle.style.fontWeight = "400";
		ccTitle.style.borderStyle = "";
	}
}
