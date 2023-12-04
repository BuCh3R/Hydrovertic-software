function toggleValues() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("maindropdown").classList.toggle("bottom-borders");
}
    // Close dropdown if user click anywhere else
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.arrow-down')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let dropdownbtn = document.getElementsByClassName("dropbtn");

        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        
        let b;
        for (b = 0; b < dropdownbtn.length; b++){
            let opendropdownbtn = dropdownbtn[b];
            if(opendropdownbtn.classList.contains('bottom-borders')){
            opendropdownbtn.classList.remove('bottom-borders');
        }
        }
    }
}