// elements of value dropdown options
let valbtn = document.getElementById("valueDropdown");
let Alle = document.getElementById("Alle");
let Temperatur = document.getElementById("Temperatur");
let Luftfugtighed = document.getElementById("Luftfugtighed");
let Kuldioxid = document.getElementById("Kuldioxid");
let Vandsledningsevne = document.getElementById("Vandsledningsevne");
let VandspH = document.getElementById("VandspH");

// elements of time dropdown options
let timeBtn = document.getElementById("timeDropdown");
let timeDag = document.getElementById("timeDag");
let timeUge = document.getElementById("timeUge");
let timeMåned = document.getElementById("timeMåned");
let timeKvartal = document.getElementById("timeKvartal");
let timeÅr = document.getElementById("timeÅr");
let timeBrugerdefineret = document.getElementById("timeBrugerdefineret");

// recreate svg imgs
let arrowDown = document.createElement("img");
arrowDown.src = "chevron-down.svg";
arrowDown.setAttribute("class", "arrow-down");
let arrowDown2 = document.createElement("img");
arrowDown2.src = "chevron-down.svg";
arrowDown2.setAttribute("class", "arrow-down");



function toggleValues() {
    document.getElementById("valueDropdownOptions").classList.toggle("show");
    valbtn.classList.toggle("bottom-borders");
}

function toggleTime() {
    document.getElementById("timeDropdownOptions").classList.toggle("show");
    timeBtn.classList.toggle("bottom-borders");
}

let time = 96;
let customTime;

//checks what option was selected in the value dropdown
function valCheckSelected(event){
    let newContext = document.getElementById("valueDropdown");
    if(event.target.matches('#Alle')){
        newContext.textContent = Alle.textContent;
        newContext.appendChild(arrowDown);
        createData();
        if (customTime == true) {
            customTimeFrame();
        }
        else {
            selectedTimeFrame();
        }
        createChart();
    }else if(event.target.matches('#Temperatur')){
        newContext.textContent = Temperatur.textContent;
        newContext.appendChild(arrowDown);
        createData();
        if (customTime == true) {
            customTimeFrame();
        }
        else {
            selectedTimeFrame();
        }
        createChart();
    }else if(event.target.matches('#Luftfugtighed')){
        newContext.textContent = Luftfugtighed.textContent;
        newContext.appendChild(arrowDown);
        createData();
        if (customTime == true) {
            customTimeFrame();
        }
        else {
            selectedTimeFrame();
        }
        createChart();
    }else if(event.target.matches('#Kuldioxid')){
        newContext.textContent = Kuldioxid.textContent;
        newContext.appendChild(arrowDown);
        createData();
        if (customTime == true) {
            customTimeFrame();
        }
        else {
            selectedTimeFrame();
        }
        createChart();
    }else if(event.target.matches('#Vandsledningsevne')){
        newContext.textContent = Vandsledningsevne.textContent;
        newContext.appendChild(arrowDown);
        createData();
        if (customTime == true) {
            customTimeFrame();
        }
        else {
            selectedTimeFrame();
        }
        createChart();
    }else if(event.target.matches('#VandspH')){
        newContext.textContent = VandspH.textContent;
        newContext.appendChild(arrowDown);
        createData();
        if (customTime == true) {
            customTimeFrame();
        }
        else {
            selectedTimeFrame();
        }
        createChart();
    }
}

//checks what option was selected in the timeframe dropdown
function timeCheckSelected(event){
    customTime = false;
    let newContext = document.getElementById("timeDropdown");
    if(event.target.matches('#timeDag')){
        newContext.textContent = timeDag.textContent;
        newContext.appendChild(arrowDown2);
        document.getElementById("chose-date").style = "display:none";
        time = 96;
        selectedTimeFrame();
        chartIntervals();
        createChart();
    }else if(event.target.matches('#timeUge')){
        newContext.textContent = timeUge.textContent;
        newContext.appendChild(arrowDown2);
        document.getElementById("chose-date").style = "display:none"
        time = 672;
        selectedTimeFrame();
        chartIntervals();
        createChart();
    }else if(event.target.matches('#timeMåned')){
        newContext.textContent = timeMåned.textContent;
        newContext.appendChild(arrowDown2);
        document.getElementById("chose-date").style = "display:none";
        time = 2880;
        selectedTimeFrame();
        chartIntervals();
        createChart();
    }else if(event.target.matches('#timeKvartal')){
        newContext.textContent = timeKvartal.textContent;
        newContext.appendChild(arrowDown2);
        document.getElementById("chose-date").style = "display:none";
        time = 8640;
        selectedTimeFrame();
        chartIntervals();
        createChart();
    }else if(event.target.matches('#timeÅr')){
        newContext.textContent = timeÅr.textContent;
        newContext.appendChild(arrowDown2);
        document.getElementById("chose-date").style = "display:none";
        time = 35040;
        selectedTimeFrame();
        chartIntervals();
        createChart();
    }else if(event.target.matches('#timeBrugerdefineret')){
        time = 0;
        newContext.textContent = timeBrugerdefineret.textContent;
        newContext.appendChild(arrowDown2);
        document.getElementById("chose-date").style = "display:block";
        customTime = true;
        customTimeFrame();
        chartIntervals();
        createChart();
    }
}

let startDateObj = {
    day: 1,
    month: 1,
    year: 1
}

let endDateObj = {
    day: 1,
    month: 1,
    year: 1
}

let startDay = document.getElementById("startDay");
let startMonth = document.getElementById("startMonth");
let startYear = document.getElementById("startYear");

let endDay = document.getElementById("endDay");
let endMonth = document.getElementById("endMonth");
let endYear = document.getElementById("endYear");

let theForm = document.getElementById("chose-date");
theForm.addEventListener('input', function () {
    startDateObj.day = startDay.value;
    startDateObj.month = startMonth.value;
    startDateObj.year = startYear.value;

    endDateObj.day = endDay.value;
    endDateObj.month = endMonth.value;
    endDateObj.year = endYear.value;
    customTimeFrame();
    chartIntervals();
    createChart();
});

window.onclick = function(event) {
    valCheckSelected(event);
    timeCheckSelected(event);

    // closes value dropdown content
    if (!event.target.matches('.valdropbtn') && !event.target.matches('.arrow-down')) {
        let dropdowns = document.getElementsByClassName("val-dropdown-content");
        let dropdownbtn = document.getElementsByClassName("valdropbtn");

        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        
        for (let i = 0; i < dropdownbtn.length; i++){
            let opendropdownbtn = dropdownbtn[i];
            if(opendropdownbtn.classList.contains('bottom-borders')){
            opendropdownbtn.classList.remove('bottom-borders');
            }
        }
    }
    
    // closes time dropdown content
    if (!event.target.matches('.timedropbtn') && !event.target.matches('.arrow-down-time')) {
        let dropdowns = document.getElementsByClassName("time-dropdown-content");
        let dropdownbtn = document.getElementsByClassName("timedropbtn");

        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        for (let i = 0; i < dropdownbtn.length; i++){
            let opendropdownbtn = dropdownbtn[i];
            if(opendropdownbtn.classList.contains('bottom-borders')){
            opendropdownbtn.classList.remove('bottom-borders');
            }
        }
    }
}
