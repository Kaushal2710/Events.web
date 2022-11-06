import app from './firebaseconfig.js'

const registrationForm = document.getElementById('registrationForm')

const db = app.firestore()
db.settings({ timestampsInSnapshots: true })

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = registrationForm['name'].value
    const category = registrationForm['category'].value
    const type = registrationForm['type'].value
    const phone = registrationForm['phone'].value

    db.collection('Registrations').add({
        name: name,
        category: category,
        type: type,
        phone: phone
    })
    .then(() => {
        console.log('User added')
    })
    .catch(err => {
        console.log(err)
    })
})


