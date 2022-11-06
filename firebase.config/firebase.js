import app from './firebaseconfig.js'


const auth = app.auth()

// const register = () => {
//     console.log("signUP button clicked")
//     const email = document.getElementById('email').value
//     const password = document.getElementById('password').value

//     auth.createUserWithEmailAndPassword(email, password)
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) =>{
//       alert(err.message)
//       console.log(err.code)
//       console.log(err.message)
//     })
//   }

// const signupBtn = document.getElementById('signUp')
// signupBtn.addEventListener('click', register)


// const login = () => {
//     const email = document.getElementById('email').value
//     const password = document.getElementById('password').value
  
//     auth.signInWithEmailAndPassword(email, password)
//     .then((res) => {
//       console.log(res)
//     })
//     .catch((err) => {
//       alert(err.message)
//       console.log(err.code)
//       console.log(err.message)
//     })
//   }

// const loginBtn = document.getElementById('logIn')
// loginBtn.addEventListener('click', login)


// const logout = () => {
//         auth.signOut()
//         .then(() => {
//         // Sign-out successful.
//         })
//         .catch((error) => {
//         // An error happened.
//         });
//     }

// const logoutBtn = document.getElementById('logOut')
// //logoutBtn.addEventListener('click', logout)

// var provider = new firebase.auth.GoogleAuthProvider();

// const googleBtn = document.getElementById("googleAuth")
// googleBtn.addEventListener("click",function(){
//     console.log("Firebase working")
//     firebase.auth()
//     .signInWithPopup(provider)
//       .then((result) => {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;
  
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
//       console.log(user)
//       // ...
//     }).catch((error) => {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       // ...
//     });
//   })
