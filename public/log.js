function authenticate() {
  localStorage.setItem("isAuthenticated", "true");
  window.location.href = "dash.html";
}
