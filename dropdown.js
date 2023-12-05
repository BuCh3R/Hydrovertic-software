function toggleValues() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("maindropdown").classList.toggle("bottom-borders");
}
    // Close dropdown if user click anywhere else
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.arrow-down')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let dropdownbtn = document.getElementsByClassName("dropbtn");

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