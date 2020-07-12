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
  // templateQueryDatabase();

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
      
    } else{
      view.setActiveScreen(`loginScreen`);
    }
  });
};

templateQueryDatabase = () => {
  const docId = 'MK6ULqoTfCZzTNEAP3Ek'

  //get one
  // firebase.firestore().collection('users').doc(docId).get().then(res => {
  //   console.log(getDataFromDoc(res));
  // }).catch(err => {
  //   console.log(err);
    
  // })
    
  
//   // get many
//       try {
//         let user = await firebase.firestore().collection('users').where('age',"==",20).get()
//         console.log(getDataFormDocs(user.docs))
//     } catch (e) {
//         console.log(e)
//     }

//   // create
// const dataToCreate = {
//   name: 'Create',
//   age: 18,
//   email: 'thanhdkhe150032@gmail.com',
//   phoneNum: ['930127735126653']
// }
// firebase.firestore().collection('users').add(dataToCreate).then(res => {
//        alert("added")
// })

//   // update
//     const docIdUpdate = 'ACqLlrQjlXfNoO72U8Tl'
//     const dateToupdate = {
//       age:20,
//       address: 'HN',
//       phone: firebase.firestore.FieldValue.arrayUnion('123123123'),
//     }
//     firebase.firestore().collection('users').doc(docIdUpdate).update(dateToupdate).then(res => {
//       alert('updated')
//     })
//   //delete

//   const docIdDelete = 'ACqLlrQjlXfNoO72U8Tl';
//   firebase.firestore().collection('users').doc(docIdUpdate).delete().then(res => {
//     alert('deleted')
//   })
// }

// getDataFromDoc = (doc) => {
//      const data = doc.data()
//      data.id = doc.id;
//      return data;
// }
// getDataFromDocs = (docs) =>{
//   return docs.map(getDataFromDoc)
}

