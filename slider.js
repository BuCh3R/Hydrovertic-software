let slider = document.getElementById("chart-range");

let minInterval = document.getElementById("min-interval");
let maxInterval = document.getElementById("max-interval");
let currentInterval = document.getElementById("current-interval");

slider.min = 1;
slider.max = 4;
slider.value = 2;

minInterval.innerHTML = slider.min * 15 + " minutter";
maxInterval.innerHTML = slider.max * 15 + " minutter";
currentInterval.innerHTML = slider.value * 15;

slider.oninput = function() {
    currentInterval.innerHTML = this.value * 15;
}
