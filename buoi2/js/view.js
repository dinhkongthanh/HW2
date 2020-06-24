const view = {};
view.setActiveScreen = (screenName) => {
  document.getElementById("app").innerHTML = components.welcomeScreen;
  switch (screenName) {
    case "registerScreen":
      document.getElementById("app").innerHTML = components.registerScreen;
      const registerForm = document.getElementById("form-register");
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const registerInfo = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        if (registerInfo.firstName === "") {
          document.getElementById("error-first-name").innerText =
            "input firstName";
        }
        if (registerInfo.lastName === "") {
          document.getElementById("error-last-name").innerText =
            "input lastName";
        }
        if (registerInfo.email === "") {
          document.getElementById("error-email-name").innerText = "input email";
        }
        if (registerInfo.password === "") {
          document.getElementById("error-password-name").innerText =
            "input password";
        }
        if (registerInfo.confirmPassword === "") {
          document.getElementById("error-confirm-password-name").innerText =
            "input confirmPassword";
        }
        controller.register(registerInfo);
      });

           const toLoginScreen = document.getElementById('redirect-to-login');
        toLoginScreen.addEventListener('click', (e) =>{
            view.setActiveScreen('loginScreen');
        });
      break;
    case "loginScreen":
      document.getElementById('app').innerHTML = components.loginScreen;
      const loginForm = document.getElementById('login-form');
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };

        if (loginInfo.email === "") {
          document.getElementById("error-email").innerText = "input email";
        }
        else{
            document.getElementById("error-email").innerText = '';
            
        }
        if (loginInfo.password === "") {
          document.getElementById("error-password").innerText =
            "input password";
            
        }
        else{
            document.getElementById("error-password").innerText='';
            
        }

        controller.login(loginInfo);
        });
        const toRegisterScreen = document.getElementById('redirect-to-register');
        toRegisterScreen.addEventListener('click', (e) => {
            view.setActiveScreen('registerScreen');
        
      });

      break;
  }
};
