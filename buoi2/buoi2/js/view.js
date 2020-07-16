const view = {};
view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "registerScreen":
      document.getElementById("app").innerHTML = components.registerScreen;
      const registerForm = document.getElementById("form-register");
      const btn = document.getElementById("redirect-to-login");
      btn.addEventListener("click", function () {
        view.setActiveScreen("loginScreen");
      });
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
      break;
    case "loginScreen":
      document.getElementById("app").innerHTML = components.loginScreen;
      const loginForm = document.getElementById("form-login");
      const loginBtn = document.getElementById("redirect-to-register");
      loginBtn.addEventListener("click", function () {
        view.setActiveScreen("registerScreen");
      });
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.login(loginInfo);
      });
      break;
    case "chatScreen":
      document.getElementById("app").innerHTML = components.chatScreen;
      const sendMessageForm = document.querySelector("#sendMessageForm");
      sendMessageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const message = {
          content: sendMessageForm.message.value,
          createdAt: new Date().toISOString(),
          owner: model.currentUser.email,
        };
        // const messageFromBot = {
        //   owner: 'Bot',
        //   content: sendMessageForm.message.value
        // }
        if (sendMessageForm.message.value.trim() !== "") {
          model.addMessage(message);
          // view.addMessage(messageFromBot)
        }

        sendMessageForm.message.value = "";
      });
      document
        .getElementById("new-conversation")
        .addEventListener("click", () => {
          view.setActiveScreen("createConversationScreen");
        });
      model.loadConversations();
      model.listenConversationsChange();
      const addUserForm = document.querySelector("#add-user-form");
      addUserForm.addEventListener("submit", (e) => {
        e.preventDefault();
        controller.addUser(addUserForm.email.value);
        addUserForm.email.value = "";
      });
      document
        .querySelector("#sendMessageForm input")
        .addEventListener("click", () => {
          document.getElementById(
            model.currentConversation.id
          ).lastElementChild.style = "display: none";
        });
      break;
    case "createConversationScreen":
      document.getElementById("app").innerHTML =
        components.createConversationScreen;
      document.getElementById("back-to-chat").addEventListener("click", () => {
        view.backToChatScreen();
      });
      const createConversationForm = document.getElementById(
        "create-conversation-form"
      );
      createConversationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          title: createConversationForm.title.value,
          friendEmail: createConversationForm.email.value,
        };
        controller.createConversation(data.title, data.friendEmail);
      });
      break;
  }
};

view.backToChatScreen = () => {
  document.getElementById("app").innerHTML = components.chatScreen;
  const sendMessageForm = document.querySelector("#sendMessageForm");
  sendMessageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = {
      content: sendMessageForm.message.value,
      createdAt: new Date().toISOString(),
      owner: model.currentUser.email,
    };
    if (sendMessageForm.message.value.trim() !== "") {
      model.addMessage(message);
    }
    sendMessageForm.message.value = "";
  });
  document.getElementById("new-conversation").addEventListener("click", () => {
    view.setActiveScreen("createConversationScreen");
  });
  view.showConversations();
  view.showCurrentConversation();
  const addUserForm = document.querySelector("#add-user-form");
  addUserForm.addEventListener("submit", (e) => {
    e.preventDefault();
    controller.addUser(addUserForm.email.value);
    addUserForm.email.value = "";
  });
  document
    .querySelector("#sendMessageForm input")
    .addEventListener("click", () => {
      document.getElementById(
        model.currentConversation.id
      ).lastElementChild.style = "display: none";
    });
};

view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message;
};

view.addMessage = (message) => {
  const messageWrapper = document.createElement("div");
  messageWrapper.classList.add("message");
  if (model.currentUser.email === message.owner) {
    messageWrapper.classList.add("mine");
    messageWrapper.innerHTML = `
    <div class="content">${message.content}</div>
    `;
  } else {
    messageWrapper.classList.add("their");
    messageWrapper.innerHTML = `
    <div class="owner">${message.owner}</div>
    <div class="content">${message.content}</div>
    `;
  }
  // console.log('test')
  const listMessage = document.querySelector(".list-message");
  listMessage.appendChild(messageWrapper);
  listMessage.scrollTop = listMessage.scrollHeight;
};
view.showCurrentConversation = () => {
  document.querySelector(".list-message").innerHTML = "";
  for (let oneMessage of model.currentConversation.messages) {
    view.addMessage(oneMessage);
  }
  document.querySelector(".conversation-detail>.conversation-title").innerText =
    model.currentConversation.title;
  // Gộp chung hàm view.showCurrentConversationUser, addUser vào làm 1:
  // const usersWrapper = document.createElement("div");
  // document.querySelector(".list-users").innerHTML = "";
  // model.currentConversation.users.forEach((element) => {
  //   usersWrapper.insertAdjacentHTML("beforeend", `<div>${element}</div>`);
  // });
  // document.querySelector(".list-users").appendChild(usersWrapper);
  view.showCurrentConversationUser();
};

view.showCurrentConversationUser = () => {
  document.querySelector(".list-users").innerHTML = "";
  for (user of model.currentConversation.users) {
    view.addUser(user);
  }
};

view.addUser = (user) => {
  const usersWrapper = document.createElement("div");
  usersWrapper.innerText = user;
  document.querySelector(".list-users").appendChild(usersWrapper);
};

view.showConversations = () => {
  document.querySelector(".list-conversations").innerHTML = "";
  for (oneConversation of model.conversations) {
    view.addConversation(oneConversation);
  }
};

view.addConversation = (conversation) => {
  const conversationWrapper = document.createElement("div");
  conversationWrapper.classList.add("conversation");
  conversationWrapper.id = conversation.id;
  if (conversation.id === model.currentConversation.id) {
    conversationWrapper.classList.add("current");
  }
  conversationWrapper.innerHTML = `
  <div class = "conversation-title">${conversation.title}</div>
  <div class = "conversation-num-users">${conversation.users.length} users</div>
  <div class ="conversation-notify"></div>
  `;

  conversationWrapper.addEventListener("click", () => {
    //Cach 1:
    // model.currentConversation = conversation
    // const conversationList = document.querySelectorAll(".conversation")
    // for (let i = 0; i < conversationList.length; i++){
    //   conversationList[i].classList.remove('current')
    // }
    // conversationWrapper.classList.add('current')
    // const conversationTitle = document.querySelector(".conversation-title")
    // conversationTitle.innerHTML = `${conversation.title}`
    // const listMessage = document.querySelector(".list-message")
    // listMessage.innerHTML = ''
    // view.showCurrentConversation()

    //Cach cua thay
    document.querySelector(".current").classList.remove("current");
    conversationWrapper.classList.add("current");
    const usersWrapper = document.createElement("div");
    document.querySelector(".list-users").innerHTML = "";
    model.currentConversation.users.forEach((element) => {
      usersWrapper.insertAdjacentHTML("beforeend", `<div>${element}</div>`);
    });
    document.querySelector(".list-users").appendChild(usersWrapper);
    model.changeCurrentConversation(conversation.id);
    conversationWrapper.lastElementChild.style = "display: none";
  });
  // console.log("Test");
  document
    .querySelector(".list-conversations")
    .appendChild(conversationWrapper);
};

view.showNotify = (conversationId) => {
  const conversation = document.getElementById(conversationId);
  conversation.lastElementChild.style = "display: block";
};