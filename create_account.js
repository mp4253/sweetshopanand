document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("createAccountForm").addEventListener("submit", psp);
});

    function psp(event) {

    event.preventDefault();

    var user = document.getElementById("first_field").value.trim();
    var email_enter = document.getElementById("second_field").value.trim();
    var pass_enter = document.getElementById("third_field").value.trim();
    var confirm_pass_enter = document.getElementById("fourth_field").value.trim();
    
    if(user == "" || email_enter == "" || pass_enter == "" || confirm_pass_enter == ""){
        
        if(user === ""){
            alert("Please fill the username.");
            return;
        }

        else if(email_enter === ""){
            alert("Please fill the email.");
        }
        else if(pass_enter === ""){
            alert("Please fill the password.");
        }
        else if(confirm_pass_enter === ""){
            alert("Please enter the password again.");
        }
    }
    
    else{
        alert("Thank You for creating your account.");

        setTimeout(function() {
            window.location.href = "./index.html"; 
        }, 1000);
    }

}


function check(){

    var a = document.getElementById('third_field');

    var b = document.getElementById('checking_checkbox');

    if(b.checked){
        a.type = "text";
    }
    else{
        a.type = "password";
    }

    var c = document.getElementById('fourth_field');

    var d = document.getElementById('confirm_checking_checkbox');

    if(d.checked){
        c.type = "text";
    }
    else{
        c.type = "password";
    }

}





// let typingTimer;
// const typingDelay = 500;

// function spinning() {
//     let password_loader = document.getElementById("loader");
//     let password = document.getElementById("pass_word");

//     loader.style.opacity = "1";

//     clearTimeout(typingTimer);

//     typingTimer = setTimeout(() => {
//         loader.style.opacity = "0";
//     }, typingDelay);
// }


let typingTimer;
const typingDelay = 500;

function spinning(loaderId) {
    let loader = document.getElementById(loaderId);

    if (!loader) return;

    loader.style.opacity = "1";

    clearTimeout(typingTimer);

    typingTimer = setTimeout(() => {
        loader.style.opacity = "0"; 
    }, typingDelay);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("third_field").addEventListener("input", function () {
        spinning("password_loader");
    });

    document.getElementById("fourth_field").addEventListener("input", function () {
        spinning("confirm_password_loader");
    });
});
