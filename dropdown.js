function toggleValues() {
    document.getElementById("valueDropdownOptions").classList.toggle("show");
    document.getElementById("valueDropdown").classList.toggle("bottom-borders");
}

function toggleTime() {
    document.getElementById("timeDropdownOptions").classList.toggle("show");
    document.getElementById("timeDropdown").classList.toggle("bottom-borders");
}

// Close dropdown if user click anywhere else
window.onclick = function(event) {
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
