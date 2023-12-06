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