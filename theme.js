document.getElementById('theme-button').addEventListener('click', () => { switchTheme() });

let darkTheme = 0;

function switchTheme() {
    if (darkTheme) {
        document.documentElement.style.setProperty("--main-bg-color", "#efefef");
        document.documentElement.style.setProperty("--secondary-bg-color", "#ffffff");
        document.documentElement.style.setProperty("--primary-color", "#008559");
        document.documentElement.style.setProperty("--accent-color", "#dfdfdf");
        document.documentElement.style.setProperty("--text-color", "#3f3f3f");
        document.documentElement.style.setProperty("--secondary-text-color", "#7f7f7f");
        darkTheme = 0;
    }
    else {
        document.documentElement.style.setProperty("--main-bg-color", "#1f1f1f");
        document.documentElement.style.setProperty("--secondary-bg-color", "#171717");
        document.documentElement.style.setProperty("--primary-color", "#008559");
        document.documentElement.style.setProperty("--accent-color", "#3f3f3f");
        document.documentElement.style.setProperty("--text-color", "#ffffff");
        document.documentElement.style.setProperty("--secondary-text-color", "#bfbfbf");
        darkTheme = 1;
    }
}
