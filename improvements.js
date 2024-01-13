// checks for login
if(window.location.href.includes("login.html")){
    let insertUserName = document.getElementById("inputUserName");
    let loginBtn = document.getElementById("loginBtn");

    // send user data to new url
    loginBtn.addEventListener("click", function(){
        let loginSectionRemove = document.getElementById("login-section");
        loginSectionRemove.style = "display:none";

        // play load aniamtion
        let loadContainer = document.getElementById("load-section");
        loadContainer.style = "display:block";

        let grayOverlay = document.createElement("div");
        grayOverlay.setAttribute("class", "gray-overlay");
        loadContainer.appendChild(grayOverlay);

        let outlineImg = document.createElement("img");
        outlineImg.setAttribute("src", "outline-img.png");
        loadContainer.appendChild(outlineImg);

        // delay equal to css animation
        setTimeout(redirectUrl, 3000);
        function redirectUrl(){
            window.location.href = "index.html"+"?username="+insertUserName.value;
        }
    });

    let createNewUser = document.getElementById("createUserBtn");
    let createUserWindow = false;
    createNewUser.addEventListener("click", function(){
        if(createUserWindow){
            // create new user is already open
        }else{
            doesUsercreateExist = true;
            let loginSection = document.getElementById("login-section");
            let createSection = document.getElementById("create-section");

            // create username input
            let newUserNameLabel = document.createElement("h3");
            newUserNameLabel.innerHTML = "Brugernavn";
            createSection.appendChild(newUserNameLabel);

            let newUserName = document.createElement("input");
            newUserName.setAttribute("type", "text");
            newUserName.setAttribute("id", "newUserName");
            newUserName.setAttribute("class", "create-user-input");
            createSection.appendChild(newUserName);

            // create password section
            let newPasswordLabel = document.createElement("h3");
            newPasswordLabel.innerHTML = "Adgangskode";
            createSection.appendChild(newPasswordLabel);

            let newPasswordSection = document.createElement("div");
            newPasswordSection.setAttribute("class", "new-pw-box");
            createSection.appendChild(newPasswordSection);

            let newPassword = document.createElement("input");
            newPassword.setAttribute("type", "password")
            newPassword.setAttribute("id", "newPassword");
            newPassword.setAttribute("class", "create-user-input");
            newPasswordSection.appendChild(newPassword);

            // hide password icons
            let pwHideImg = document.createElement("img");
            pwHideImg.setAttribute("src", "eye-slashed.svg");
            pwHideImg.setAttribute("id", "slashed-eye");

            let pwShowImg = document.createElement("img");
            pwShowImg.setAttribute("src", "eye.svg");
            pwShowImg.setAttribute("id", "eye");

            // checks if darkmode is on
            if(darkTheme){
                pwShowImg.classList.toggle("image-white");
                pwHideImg.classList.toggle("image-white");
            }
            newPasswordSection.appendChild(pwHideImg);
            newPasswordSection.appendChild(pwShowImg);

            let newPhoneLabel = document.createElement("h3");
            newPhoneLabel.innerHTML = "Telefonnummer";
            createSection.appendChild(newPhoneLabel);

            let createNewPhone = document.createElement("input");
            createNewPhone.setAttribute("type", "text");
            createNewPhone.setAttribute("id", "newPhoneNumber");
            createNewPhone.setAttribute("class", "create-user-input");
            createSection.appendChild(createNewPhone);

            // create button section
            let createUserBtnSection = document.createElement("div");
            createUserBtnSection.setAttribute("id", "createUserBtnBox");
            createUserBtnSection.setAttribute("class", "user-btn-box");
            createSection.appendChild(createUserBtnSection);
            let userSectionWrap = document.getElementById("createUserBtnBox");

            let createUserTextBox = document.createElement("div");
            createUserTextBox.setAttribute("id", "createUserTxtBox");
            createUserTextBox.setAttribute("class", "user-txt-box");
            userSectionWrap.appendChild(createUserTextBox);
            let goToLogin = document.getElementById("createUserTxtBox");

            let toLoginP = document.createElement("p");
            toLoginP.innerHTML = "Har du en konto?";
            goToLogin.appendChild(toLoginP);

            let toLoginA = document.createElement("a");
            toLoginA.setAttribute("id", "backToLogin");
            toLoginA.setAttribute("class", "back-to-login");
            toLoginA.innerHTML = "Log på!";
            goToLogin.appendChild(toLoginA);

            let createNewUserBtn = document.createElement("button");
            createNewUserBtn.setAttribute("id", "submitUser");
            createNewUserBtn.setAttribute("class", "button");
            createNewUserBtn.textContent = "Opret";
            userSectionWrap.appendChild(createNewUserBtn);

            // return to login page on user create/go back
            let goBackToLoginLink = document.getElementById("backToLogin");
            goBackToLoginLink.addEventListener("click", function(){
                window.location.href = "login.html";
            });

            let submitUserBtn = document.getElementById("submitUser");
            submitUserBtn.addEventListener("click", function(){
                window.location.href = "login.html";
            });

            // change input on hide icon click
            let pwhide = document.getElementById("slashed-eye");
            let pwShow = document.getElementById("eye");
            pwhide.addEventListener("click", function(){
                pwhide.classList.toggle("hide");
                pwShow.classList.toggle("show");
                document.getElementById("newPassword").setAttribute("type", "text");
            });
            pwShow.addEventListener("click", function(){
                pwhide.classList.toggle("hide");
                pwShow.classList.toggle("show");
                document.getElementById("newPassword").setAttribute("type", "password");
            });

            // hide login section / show create section
            loginSection.setAttribute("class", "hide");
            createSection.style = "display:flex";

            createUserWindow = true;
        }
    });
}else{
    // use get to retrieve username from url
    let urlUserName = location.search.split('username=')[1];
    let userName = document.getElementById("userName");

    if(urlUserName.includes("%20")){
        let tmpUser = urlUserName.replace(/%20/g, " ");
        userName.innerHTML = "<strong>"+tmpUser+"<strong>";
    }else{
        userName.innerHTML = "<strong>"+urlUserName+"<strong>";
    }
    
    // get width of dropdown button and set content equal to
    let valDropDownButton = document.getElementById("valueDropdown");
    let valdropDownOptions = document.getElementById("valueDropdownOptions");
    valdropDownOptions.style.width = valDropDownButton.offsetWidth +"px";

    // set additional dropdown contents
    let timedropDownOptions = document.getElementById("timeDropdownOptions");
    timedropDownOptions.style.width = valDropDownButton.offsetWidth +"px";
}

