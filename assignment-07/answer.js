// Full disclosure, I do not know JavaScript. This script was generated entirely by ChatGPT 3.5. 
// Once Python backends in the web become more stable, I will be able to use that, but until
// then, I must rely on other entities to program JS for me.
//
// However, I did make a couple edits. For one, I set it to never actually save the CSV anywhere. 
// I also changed it so it separates CSV values by comma instead of by newline, as it was
// originally programmed to do.

function submitForm() {
	// Get form data
	const formData = new FormData(document.getElementById("bears"));
  
	// Create CSV data from form data
	const csvData = createCSV(formData);
  
	// Save the response to a CSV file
	//downloadCSV(csvData);
  
	// Display "response received" to the user
	alert("Response received");
  }
  
  function createCSV(formData) {
	// Define the order of columns in your CSV
	const columns = ["love-for-bears", "family", "first-year", "fat-bear-number", "comment"];
	
	// Create the header row
	const header = columns.join(",") + "\n";
  
	// Create an array of rows with values
	const rows = columns.map((column) => formData.getAll(column).join(','));
	
	// Combine rows into a single CSV string
	return header + rows.join(',');
  }
  
  function downloadCSV(csvData) {
	// Create a Blob with the CSV data
	const blob = new Blob([csvData], { type: 'text/csv' });
  
	// Create an object URL for the Blob
	const url = URL.createObjectURL(blob);
  
	// Create an anchor element to trigger the download
	const a = document.createElement('a');
	a.href = url;
	a.download = 'form_response.csv';
  
	// Programmatically click the anchor to initiate the download
	a.click();
  
	// Revoke the object URL to free up memory
	URL.revokeObjectURL(url);
  }