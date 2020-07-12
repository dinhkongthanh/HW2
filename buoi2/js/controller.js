const controller = {};
controller.register = (registerInfo) => {
  if (registerInfo.firstName === "") {
    view.setErrorMessage("error-first-name", "input firstName");
  } else {
    view.setErrorMessage("error-first-name", "");
  }
  if (registerInfo.lastName === "") {
    view.setErrorMessage("error-last-name", "input lastName");
  } else {
    view.setErrorMessage("error-last-name", "");
  }
  if (registerInfo.email === "") {
    view.setErrorMessage("error-email-name", "input email");
  } else {
    view.setErrorMessage("error-email-name", "");
  }
  if (registerInfo.password === "") {
    view.setErrorMessage("error-password-name", "input password");
  } else {
    view.setErrorMessage("error-password-name", "");
  }
  if (registerInfo.confirmPassword === "") {
    view.setErrorMessage("error-confirm-password-name", "confirmPassword");
    return;
  } else if (registerInfo.confirmPassword !== registerInfo.password) {
    view.setErrorMessage(
      "error-confirm-password-name",
      "confirm Password wrong"
    );
    return;
  } else {
    view.setErrorMessage("error-confirm-password-name", "");
  }
if(registerInfo.firstName !== '' && registerInfo.lastName!== '' && registerInfo.email!=='' && registerInfo.password !==''){
    model.register( registerInfo.firstName, registerInfo.lastName,  registerInfo.email, registerInfo.password);
}
};
controller.login = (loginInfo) => {
  if (loginInfo.email === "") {
    view.setErrorMessage("error-email", "input email");
  } else {
    view.setErrorMessage("error-email", "");
  }
  if (loginInfo.password === "") {
    view.setErrorMessage("error-password", "input password");
  } else {
    view.setErrorMessage("error-password", "");
  }
  if(loginInfo.email !== '' && loginInfo.password !==''){
      model.login(loginInfo.email, loginInfo.password);
  }
};
controller.createConversation = ({title, friendEmail}) => {

view.setErrorMessage('conversation-name-error', title=== '' ? 'please input title' :'');
view.setErrorMessage('conversation-email-error', friendEmail=== '' ? 'please input email' :'');
view.setErrorMessage('conversation-email-error', !controller.validateEmail(friendEmail)? 'Wrong Email Format!':'')
if(title !== '' && friendEmail !== ''){
  model.createConversation({
    title,
    users:[friendEmail, model.currentUser.email],
    createdAt: new Date().toISOString(),
    message: []
  })
  
}
}
controller.validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

