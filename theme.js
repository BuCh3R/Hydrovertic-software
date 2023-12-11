let darkTheme;

function switchTheme() {
    if (darkTheme) {
        document.documentElement.style.setProperty("--main-bg-color", "#1f1f1f");
        document.documentElement.style.setProperty("--secondary-bg-color", "#171717");
        document.documentElement.style.setProperty("--primary-color", "#008559");
        document.documentElement.style.setProperty("--accent-color", "#3f3f3f");
        document.documentElement.style.setProperty("--text-color", "#ffffff");
        document.documentElement.style.setProperty("--secondary-text-color", "#bfbfbf");
    }
    else {
        document.documentElement.style.setProperty("--main-bg-color", "#efefef");
        document.documentElement.style.setProperty("--secondary-bg-color", "#ffffff");
        document.documentElement.style.setProperty("--primary-color", "#008559");
        document.documentElement.style.setProperty("--accent-color", "#dfdfdf");
        document.documentElement.style.setProperty("--text-color", "#3f3f3f");
        document.documentElement.style.setProperty("--secondary-text-color", "#7f7f7f");
    }
}

// function switchTheme() {
//     if (darkTheme) {
//         sheet.insertRule(":root{--main-bg-color:#1f1f1f}");
//         sheet.insertRule(":root{--secondary-bg-color:#171717}");
//         sheet.insertRule(":root{--primary-color:#008559}");
//         sheet.insertRule(":root{--accent-color:#3f3f3f}");
//         sheet.insertRule(":root{--text-color:#ffffff}");
//         sheet.insertRule(":root{--secondary-text-color:#bfbfbf}");
//     }
//     else {
//         sheet.insertRule(":root{--main-bg-color:#f7f7f7}");
//         sheet.insertRule(":root{--secondary-bg-color:#ffffff}");
//         sheet.insertRule(":root{--primary-color:#008559}");
//         sheet.insertRule(":root{--accent-color:#dfdfdf}");
//         sheet.insertRule(":root{--text-color:#3f3f3f}");
//         sheet.insertRule(":root{--secondary-text-color:#7f7f7f}");
//     }
// }

switchTheme();