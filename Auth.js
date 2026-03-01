function handleSignup(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let pwd = document.getElementById("password").value;
  let confirmPwd = document.getElementById("confirmPassword").value;
  let msg = document.getElementById("msg");

  if (!name || !email || !pwd || !confirmPwd) {
    msg.style.color = "red";
    msg.innerText = "All fields are required!";
    return;
  }
  
  // Basic Email Validation
  if (!email.includes("@") || !email.includes(".")) {
    msg.style.color = "red";
    msg.innerText = "Enter a valid email address.";
    return;
  }

  if (pwd !== confirmPwd) {
    msg.style.color = "red";
    msg.innerText = "Passwords do not match!";
    return;
  }

  // Save to LocalStorage
  localStorage.setItem(email, pwd);
  localStorage.setItem("userName", name);
  
  msg.style.color = "green";
  msg.innerText = "Registration Successful! Redirecting...";
  setTimeout(() => window.location.href = "login.html", 1500);
}

function handleLogin(e) {
  e.preventDefault();
  let email = document.getElementById("email").value.trim();
  let pwd = document.getElementById("password").value;
  let msg = document.getElementById("msg");

  let storedPwd = localStorage.getItem(email);

  if (storedPwd && storedPwd === pwd) {
    localStorage.setItem("loggedInUser", email);
    window.location.href = "index.html";
  } else {
    msg.style.color = "red";
    msg.innerText = "Invalid Email or Password!";
  }
}
