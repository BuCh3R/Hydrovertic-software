document.getElementById('theme-button').addEventListener('click', () => { switchTheme() });

let darkTheme = 0;

let theEye;
let theSlashedEye;
let doesUsercreateExist = false;

function switchTheme() {
    if (darkTheme) {
        document.documentElement.style.setProperty("--main-bg-color", "#efefef");
        document.documentElement.style.setProperty("--secondary-bg-color", "#ffffff");
        document.documentElement.style.setProperty("--primary-color", "#008559");
        document.documentElement.style.setProperty("--accent-color", "#dfdfdf");
        document.documentElement.style.setProperty("--text-color", "#3f3f3f");
        document.documentElement.style.setProperty("--secondary-text-color", "#7f7f7f");

        // checks if create user form is loaded
        if(doesUsercreateExist){
            theEye = document.getElementById("eye");
            theSlashedEye = document.getElementById("slashed-eye");
            theEye.classList.remove("image-white");
            theSlashedEye.classList.remove("image-white");
        }

        darkTheme = 0;
    }
    else {
        document.documentElement.style.setProperty("--main-bg-color", "#1f1f1f");
        document.documentElement.style.setProperty("--secondary-bg-color", "#171717");
        document.documentElement.style.setProperty("--primary-color", "#008559");
        document.documentElement.style.setProperty("--accent-color", "#3f3f3f");
        document.documentElement.style.setProperty("--text-color", "#ffffff");
        document.documentElement.style.setProperty("--secondary-text-color", "#bfbfbf");
        
        // checks if create user form is loaded
        if(doesUsercreateExist){
            theEye = document.getElementById("eye");
            theSlashedEye = document.getElementById("slashed-eye");
            theEye.classList.toggle("image-white");
            theSlashedEye.classList.toggle("image-white");
        }

        darkTheme = 1;
    }
}
