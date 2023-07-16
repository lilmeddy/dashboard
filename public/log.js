function authenticate() {
  localStorage.setItem("isAuthenticated", "true");
  window.location.href = "dash.html";
}
let email = document.getElementById("email")
  // let phone = document.getElementById('phone')
let password = document.getElementById("password")
function sign(ev){

  ev.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // alert("logi")
    authenticate()

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
    }
function user(){
  window.location.href ="index.html"
}