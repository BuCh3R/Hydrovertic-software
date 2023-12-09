let xValues = new Array;
let yValues = new Array;

let timeFrame = 20;

function dataTimeFrame(time) {
    xValues.length = 0;
    for (let i = 0; i < dataSet.length; i++) {
        if (i < time) {
            xValues.push(dataSet[i].hour + ":" + dataSet[i].minute);
            yValues.push(dataSet[i].value);
        }
        i += parseInt(slider.value) - 1;
    }
}

// dataTimeFrame(timeFrame);

let startDay = 27;
let startMonth = 1;
let startYear = 2023;

let endDay = 28;
let endMonth = 1;
let endYear = 2023;

function afterDate(date, day, month, year) {
    if (date.year > year) {
        return true;
    }
    else if (date.year == year) {
        if (date.month > month) {
            return true;
        }
        else if (date.month == month) {
            if (date.day >= day) {
                return true;
            }
        }
    }
}

function beforeDate(date, day, month, year) {
    if (date.year < year) {
        return true;
    }
    else if (date.year == year) {
        if (date.month < month) {
            return true;
        }
        else if (date.month == month) {
            if (date.day <= day) {
                return true;
            }
        }
    }
}

function customTimeFrame() {
    xValues.length = 0;
    for (let i = 0; i < dataSet.length; i++) {
        if (afterDate(dataSet[i], startDay, startMonth, startYear) && beforeDate(dataSet[i], endDay, endMonth, endYear)) {
            xValues.push(dataSet[i].hour + ":" + dataSet[i].minute);
            yValues.push(dataSet[i].value);
        }
        i += parseInt(slider.value) - 1;
    }
}

customTimeFrame();

let primaryColor = "#008559";

function createChart() {
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
}

createChart();
