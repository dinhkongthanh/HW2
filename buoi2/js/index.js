window.onload = () => {
  console.log("loaded!");
  var firebaseConfig = {
    apiKey: "AIzaSyA4Ap-GTzoKTcYuJ_r2vemB05U-HD3MNGQ",
    authDomain: "chat-project-44.firebaseapp.com",
    databaseURL: "https://chat-project-44.firebaseio.com",
    projectId: "chat-project-44",
    storageBucket: "chat-project-44.appspot.com",
    messagingSenderId: "861668762610",
    appId: "1:861668762610:web:ecd14f85878ef985bd416b",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name);

  view.setActiveScreen("registerScreen");
  view.setActiveScreen("loginScreen");
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      if(user.emailVerified){
        model.currentUser = {
        displayName: user.displayName,

        email: user.email,
      };
      view.setActiveScreen(`chatScreen`);
      }
      
    } else {
      view.setActiveScreen(`loginScreen`);
    }
  });
};
