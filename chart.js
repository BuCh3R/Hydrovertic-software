let xValues = new Array;
let yValues = new Array;

let timeFrame = new Array;

let time;

function selectedTimeFrame() {
    timeFrame.length = 0;
    for (let i = 0; i < dataSet.length; i++) {
        if (i < time) {
            timeFrame.push(dataSet[i]);
        }
    }
}

function withinTimeFrame(date) {
    if (date.year > startDateObj.year && date.year < endDateObj.year) {
        return true;
    }
    else if (date.year == (startDateObj.year || endDateObj.year)) {
        if (date.month > startDateObj.month && date.month < endDateObj.month) {
            return true;
        }
        else if (date.month == (startDateObj.month || endDateObj.month)) {
            if (date.day >= startDateObj.day && date.day <= endDateObj.day) {
                return true;
            }
        }
    }
}

function customTimeFrame() {
    timeFrame.length = 0;
    for (let i = 0; i < dataSet.length; i++) {
        if (withinTimeFrame(dataSet[i])) {
            timeFrame.push(dataSet[i]);
        }
    }
}

customTimeFrame();

let interval = 1;

function displayInterval(value, element) {
    if (value >= 96) {
        element.innerHTML = Math.floor(value / 96) + " dag(e)";
    }
    else if (value >= 4) {
        element.innerHTML = Math.floor(value / 4) + " time(r)";
    }
    else {
        element.innerHTML = value * 15 + " minutter";
    }
}

function chartIntervals() {
    interval = 1;
    while (timeFrame.length / interval > 50) {
        interval++;
    }
    slider.min = interval;
    slider.max = interval * 4;
    slider.value = Math.round((parseInt(slider.min) + parseInt(slider.max)) / 2);
    displayInterval(slider.min, minInterval);
    displayInterval(slider.max, maxInterval);
}

chartIntervals();

let primaryColor = "#008559";

function createChart() {
    xValues.length = 0;
    yValues.length = 0;
    for (let i = 0; i < timeFrame.length; i += parseInt(slider.value)) {
        if (slider.value >= 96) {
            xValues.push(timeFrame[i].day + " / " + timeFrame[i].month);
        }
        else if (slider.value >= 4) {
            xValues.push(timeFrame[i].hour + ":00");
        }
        else {
            xValues.push(timeFrame[i].hour + ":" + timeFrame[i].minute);
        }
        yValues.push(timeFrame[i].value)
    }
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
            },
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: 50
                        }
                    }]
            }
        }
    });
    chartInstance.update();
}

createChart();
