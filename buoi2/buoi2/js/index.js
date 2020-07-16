window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyA4Ap-GTzoKTcYuJ_r2vemB05U-HD3MNGQ",
    authDomain: "chat-project-44.firebaseapp.com",
    databaseURL: "https://chat-project-44.firebaseio.com",
    projectId: "chat-project-44",
    storageBucket: "chat-project-44.appspot.com",
    messagingSenderId: "861668762610",
    appId: "1:861668762610:web:ecd14f85878ef985bd416b",
    measurementId: "G-LWE78X20S2"
  };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 console.log(firebase.app().name);
 //
 firebase.auth().onAuthStateChanged((user) => {
   if (user) {
     if (user.emailVerified) {
       model.currentUser = {
         displayName: user.displayName,
         email: user.email,
       };
       view.setActiveScreen("chatScreen");
     }
   } else {
     view.setActiveScreen("loginScreen");
   }
 });
};
// templateQueryDatabase = () =>{
//   const docId = 'oSVDl7gVcHKjOaeEU4S9'
//get one
// firebase.firestore().collection('a').doc(docId).get().then(res => {
//   console.log(getDataFromDoc(res))
// }).catch(err =>{
//   console.log(err)
// })

//get many
// firebase.firestore().collection('a').where('age','==',20).get().then(res =>{
//   console.log(res)
//   // console.log(getDataFromDoc(res.docs[0]))
//   console.log(getDataFromDocs(res.docs))
// })

//Create
// const dataToCreate = {
//   name: 'Create',
//   age: '18',
//   email: 'lskjflkajl@gmail.com',
//   phone: ['12312321']
// }
// firebase.firestore().collection('a').add(dataToCreate).then(res =>{
//   alert('Added')
// })

// update
// const docIdUpdate = 'Z9UvBF1uiW45DIHhPT7k'
// const dataToUpdate = {
//   name: 'Nguyen Van C',
//   phone: firebase.firestore.FieldValue.arrayUnion('12938109830192'),
//   email: 'aklsjdlaksj@gmail.com'
// }
// firebase.firestore().collection('a').doc(docIdUpdate).update(dataToUpdate).then (res =>{
//   alert('Updated')
// })

//delete
// const docIdDelete = '3zcBJp7A77F9Lqh5jW6E'

// firebase.firestore().collection('conversations').doc(docIdDelete).delete().then(res =>{
//   alert('Deleted')
// })
// }