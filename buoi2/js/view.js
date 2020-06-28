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

        

        controller.login(loginInfo);
        });
        const toRegisterScreen = document.getElementById('redirect-to-register');
        toRegisterScreen.addEventListener('click', (e) => {
            view.setActiveScreen('registerScreen');
        
      });

      break;
      case "chatScreen":
        document.getElementById('app').innerHTML = components.chatScreen;
        document.getElementById('welcome-user').innerText = 'welcome ' + model.currentUser.displayName;
        var logOut = document.getElementById("log-out")
        logOut.addEventListener('click', (e)=>{
          e.preventDefault()
          firebase.auth().signOut();
          view.setActiveScreen('loginScreen');
          alert("Your are logged out");
        });
        break;
  }
};
view.setErrorMessage = (elementId,message) =>{
  document.getElementById(elementId).innerText = message;
}