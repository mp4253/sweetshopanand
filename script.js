function check() {
   const passwordInput = document.getElementById("pass_word");
   const checkbox = document.getElementById("checking_checkbox");
   const label = checkbox.nextElementSibling;
   
   if (checkbox.checked) {
      passwordInput.type = "text";
      label.textContent = "Hide Password";
   } else {
      passwordInput.type = "password";
      label.textContent = "Show Password";
   }
}


let typingTimer;
const typingDelay = 500;

function spinning() {
    const loader = document.getElementById("loader");
    
    loader.style.opacity = "1";

    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
        loader.style.opacity = "0";
    }, typingDelay);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", login);
});

function login(event) {
    event.preventDefault();

    const email = document.getElementById("email_id").value;
    const password = document.getElementById("pass_word").value;
    
    if (email === "meet@example.com" && password === "1234") {
        alert("Login successfully.");
        setTimeout(function() {
            window.location.href = "home.html";
        }, 1000);
    } else {
        alert("Login failed. Please check your credentials.");
    }
}
