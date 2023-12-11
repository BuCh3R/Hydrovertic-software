
// Array with button IDs
let buttonIds = ['bar-chart-button', 'line-chart-button', 'area-chart-button'];

let chartObj = {
  	type: "line",
  	fill: false,
  	backgroundColor: "#008559"
}

// Add click event listener to each button
buttonIds.forEach((id) => {
  	let button = document.getElementById(id);
  	button.addEventListener('click', () => {
    	handleButtonClick(id);
  	});
});

// Function to handle button click
function handleButtonClick(clickedId) {
  	// Deactivate all buttons
  
  	buttonIds.forEach((id) => {
  	  let button = document.getElementById(id);
  	  button.classList.remove('active');
  	});

  	// Activate the clicked button
  	let clickedButton = document.getElementById(clickedId);
  	clickedButton.classList.add('active');

  	// Show different alerts based on the clicked button
  	if (clickedId === 'bar-chart-button') {
    	chartObj.type = "bar";
    	chartObj.fill = true;
    	chartObj.backgroundColor = "#008559";
    	createChart();
  	}
	else if (clickedId === 'line-chart-button') {
    	chartObj.type = "line";
    	chartObj.fill = false;
    	chartObj.backgroundColor = "#008559";
    	createChart();
  	}
	else if (clickedId === 'area-chart-button') {
    	chartObj.type = "line";
    	chartObj.fill = true;
    	chartObj.backgroundColor = "rgba(0, 133, 89, 0.25)";
    	createChart();
  	}
}
