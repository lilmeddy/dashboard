let email = document.getElementById("email")
  let phone = document.getElementById('phone')
let password = document.getElementById("password")

function sign(ev){

  ev.preventDefault()
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
  alert("successfull")
  window.location.href = "log.html"
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage)
  // ..
});
}

function user (){
  window.location.href = "log.html"
}
function authenticate() {
  localStorage.setItem("isAuthenticated", "true");
  window.location.href = "login.html";
}
