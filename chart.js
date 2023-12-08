let xValues = new Array;
let yValues = new Array;

let timeFrame = 96;

function dataTimeFrame(time) {
    for (let i = 0; i < dataSet.length; i++) {
        if (dataSet[i] > dataSet.length - time) {
            xValues.push(dataSet[i].hour + ":" + dataSet[i].minute);
            yValues.push(dataSet[i].value);
        }
    }
}

dataTimeFrame(timeFrame);

function chartData() {
    for (let i = 0; i * slider.value < timeFrame; i++) {
        xValues.push(dataSet[i] * slider.value)
        yValues.push(dataSet[i] * slider.value)
    }
}

chartData();

let primaryColor = "#008559";

new Chart("chart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: primaryColor,
            borderColor: primaryColor,
            data: yValues
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});