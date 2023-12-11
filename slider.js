let slider = document.getElementById("chart-range");

let minInterval = document.getElementById("min-interval");
let maxInterval = document.getElementById("max-interval");

slider.oninput = function() {
    if (customTime == true) {
        customTimeFrame();
    }
    else {
        selectedTimeFrame
    }
    createChart();
}
