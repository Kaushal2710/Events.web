const registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener('click', myFunction())
function myFunction() {
    console.log('a')
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
