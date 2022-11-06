const username = document.getElementById('username')

function renderUsername(doc){
    let li = document.createElement('li')
    let name = document.createElement('span')

    name.textContent = doc.data().name

    li.appendChild(name)

    username.appendChild(li)
}

// db.collection('users').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderUsername(doc)
//     })
// })
