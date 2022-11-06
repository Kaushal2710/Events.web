import app from './firebaseconfig.js'


const auth = app.auth()
const db = app.firestore()

const register = () => {
    console.log("signUP button clicked")
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res)
    })
    .catch((err) =>{
      alert(err.message)
      console.log(err.code)
      console.log(err.message)
    })
  }

const signupBtn = document.getElementById('signUp')
signupBtn.addEventListener('click', register)

const saveUser = (user) => {
    return db.collection('users').doc(user.uid).set({
        name: user.displayName,
        email: user.email
    })
}
