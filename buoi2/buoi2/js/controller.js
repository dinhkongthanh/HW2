const controller = {};
//Register validate function
controller.register = (registerInfo) => {
  view.setErrorMessage(
    "error-first-name",
    registerInfo.firstName === "" ? "Please input first name" : ""
  );
  view.setErrorMessage(
    "error-last-name",
    registerInfo.lastName === "" ? "Please input last name" : ""
  );
  if (registerInfo.email === "") {
    view.setErrorMessage("error-email", "Please input email ");
  } else if (controller.validateEmail(registerInfo.email) === false) {
    view.setErrorMessage("error-email", "Please type the right format");
  } else {
    view.setErrorMessage("error-email", "");
  }
  view.setErrorMessage(
    "error-password",
    registerInfo.password === "" ? "Please input password " : ""
  );
  if (registerInfo.confirmPassword === "") {
    view.setErrorMessage(
      "error-confirm-password",
      "Please input confirm password"
    );
    return;
  } else if (registerInfo.confirmPassword !== registerInfo.password) {
    view.setErrorMessage("error-confirm-password", "Wrong Password");
    return;
  } else {
    view.setErrorMessage("error-confirm-password", "");
  }

  if (
    registerInfo.firstName !== "" &&
    registerInfo.lastName !== "" &&
    registerInfo.email !== "" &&
    registerInfo.password !== ""
  ) {
    model.register(
      registerInfo.firstName,
      registerInfo.lastName,
      registerInfo.email,
      registerInfo.password
    );
  }
};

//Login validate function
controller.login = (loginInfo) => {
  view.setErrorMessage(
    "error-email",
    loginInfo.email === "" ? "Please input email" : ""
  );
  view.setErrorMessage(
    "error-password",
    loginInfo.password === "" ? "Please input password" : ""
  );
  if (loginInfo.email !== "" && loginInfo.password !== "") {
    model.login(loginInfo.email, loginInfo.password);
  }
};

//Create new conversation validate function
controller.createConversation = (title, friendEmail) => {
  view.setErrorMessage(
    "conversation-name-error",
    title === "" ? "Please input title" : ""
  );
  if (friendEmail === "") {
    view.setErrorMessage(
      "conversation-email-error",
      "Please input friend email"
    );
  } else if (controller.validateEmail(friendEmail) === false) {
    view.setErrorMessage("conversation-email-error", "Wrong email format");
  } else {
    view.setErrorMessage("conversation-email-error", "");
  }
  // view.setErrorMessage(
  //   "conversation-email-error",
  //   friendEmail === "" ? "Please input friend email" : ""
  // );
  // view.setErrorMessage(
  //   "conversation-email-error",
  //   controller.validateEmail(friendEmail) === false ? "Wrong email format" : ""
  // );
  if (
    title !== "" &&
    friendEmail !== "" &&
    controller.validateEmail(friendEmail) !== false
  ) {
    model.createConversation({
      title,
      users: [friendEmail, model.currentUser.email],
      createdAt: new Date().toISOString(),
      messages: [],
    });
  }
};

//Validate email function
controller.validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

//Add user
controller.addUser = (email) => {
  if (email === "") {
    view.setErrorMessage("add-user-email-error", "Please input friend email");
  } else if (controller.validateEmail(email) === false) {
    view.setErrorMessage("add-user-email-error", "Wrong email format");
  } else {
    view.setErrorMessage("add-user-email-error", "");
    model.addUser(email);
  }
};