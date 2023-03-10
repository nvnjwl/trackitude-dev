//IIFE  here
(function () {
  function renderLoginMenu() {
    document.body.style.margin = "0";
    var loginScreen = document.createElement("div");
    loginScreen.id = "loginScreen";
    //100% width and height position fixed
    loginScreen.style.position = "fixed";
    loginScreen.style.top = "0";
    loginScreen.style.left = "0";
    loginScreen.style.width = "100%";
    loginScreen.style.height = "100%";
    loginScreen.style.backgroundColor = "rgba(0,0,0,0.7)";
    loginScreen.style.zIndex = "1";
    loginScreen.style.margin = "0";
    loginScreen.style.padding = "0";
    loginScreen.style.border = "0";
    loginScreen.style.overflow = "hidden";

    var loginForm = document.createElement("div");
    loginForm.style.backgroundColor = "white";
    loginForm.style.margin = "auto";
    loginForm.style.width = "50%";
    loginForm.style.height = "50%";
    loginForm.style.padding = "20px";
    loginForm.style.border = "1px solid black";
    //cenetr the form
    loginForm.style.position = "absolute";
    loginForm.style.top = "50%";
    loginForm.style.left = "50%";
    // loginForm.style.right = "25%";
    loginForm.style.bottom = "25%";
    transform = "translate(-50%, -50%)";
    loginForm.style.transform = transform;
    //min width and height

    loginForm.style.minWidth = "300px";
    loginForm.style.minHeight = "300px";

    loginForm.style.borderRadius = "10px";
    loginScreen.appendChild(loginForm);
    var loginHeader = document.createElement("h1");
    loginHeader.innerText = "Login";
    loginHeader.style.textAlign = "center";
    loginHeader.style.color = "black";
    loginForm.appendChild(loginHeader);
    var loginUsername = document.createElement("input");
    loginUsername.id = "loginUsername";
    loginUsername.type = "text";
    loginUsername.value = "admin";
    loginUsername.placeholder = "Username";
    loginUsername.style.width = "100%";
    loginUsername.style.margin = "10px 0";
    loginUsername.style.padding = "10px";
    loginUsername.style.borderRadius = "5px";
    loginUsername.style.border = "1px solid black";
    loginForm.appendChild(loginUsername);
    var loginPassword = document.createElement("input");
    loginPassword.id = "loginPassword";
    loginPassword.type = "password";
    loginPassword.value = "admin";
    loginPassword.placeholder = "Password";
    loginPassword.style.width = "100%";
    loginPassword.style.margin = "10px 0";
    loginPassword.style.padding = "10px";
    loginPassword.style.borderRadius = "5px";
    loginPassword.style.border = "1px solid black";
    loginForm.appendChild(loginPassword);
    var loginButton = document.createElement("button");
    loginButton.innerText = "Login Now";
    loginButton.style.width = "100%";
    loginButton.style.margin = "10px 0";
    loginButton.style.padding = "10px";
    loginButton.style.borderRadius = "5px";
    loginButton.style.border = "1px solid black";
    loginButton.addEventListener("click", function () {
      loginNow();
    });
    loginForm.appendChild(loginButton);
    document.body.appendChild(loginScreen);
  }

  function renderMainMenu() {
    //save time stamp for last login in local storage
    var lastLogin = new Date();
    localStorage.setItem("lastLogin", lastLogin);
    let loginScreen = document.getElementById("loginScreen");
    if (loginScreen) {
      loginScreen.remove();
    }
  }

  function loginNow() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let defaultCredentials = {
      username: "admin",
      password: "admin1",
    };
    //check if the username and password match
    if (
      username === defaultCredentials.username &&
      password === defaultCredentials.password
    ) {
      //if they do, then show the main menu
      renderMainMenu();
    } else {
      //show alert
      alert("Invalid username or password");
    }
  }

  function bodyOnload() {
    //check if the user has logged in before and the last login is less than 1 hours ago
    if (localStorage.getItem("lastLogin") !== null) {
      var lastLogin = new Date(localStorage.getItem("lastLogin"));
      var currentDate = new Date();
      var timeDiff = currentDate.getTime() - lastLogin.getTime();
      var diffHours = Math.ceil(timeDiff / (1000 * 3600));
      if (diffHours < 2) {
        //alert("You have already logged in, Auto login in 2 Seconds");
        //renderLoginMenu();
        setTimeout(function () {
          renderMainMenu();
        }, 2000);
        return;
      }
    }
    renderLoginMenu();
  }

  function registerBodyOnload() {
    if (document.body) {
      bodyOnload();
    } else {
      document.addEventListener("DOMContentLoaded", bodyOnload);
    }
  }
  registerBodyOnload();
})();
