// Runs on every page to check login status and set active links
document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const loginLink = document.getElementById("loginLink");
  const signupLink = document.getElementById("signupLink");
  const logoutBtn = document.getElementById("logoutBtn");

  // Dynamic Navbar logic
  if (loggedInUser) {
    if(loginLink) loginLink.style.display = "none";
    if(signupLink) signupLink.style.display = "none";
    if(logoutBtn) logoutBtn.style.display = "inline";
  }

  // Logout functionality
  if(logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    });
  }
});
