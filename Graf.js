
// Array with button IDs
let buttonIds = ['bar-chart-button', 'line-chart-button', 'area-chart-button'];

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
    showAlert('Bar Chart');
  } else if (clickedId === 'line-chart-button') {
    showAlert('Line Chart');
  } else if (clickedId === 'area-chart-button') {
    showAlert('Area Chart');
  }
}

// Function to show an alert in the console
function showAlert(chartType) {
  console.log('Button clicked: ' + chartType);
  // You can add additional logic here if needed
}
