function backing_button_cart() {
    // window.location.href = "home.html";
    window.location.href = "sweets.html";
}


$(document).ready(function () {
    $(".cancelling_order_button").click(function () {
        localStorage.removeItem("Full_Name");
        localStorage.removeItem("Mobile_Number");
        localStorage.removeItem("Email_Id");
        localStorage.removeItem("Addressing");
        localStorage.removeItem("Pin_Code");

        window.alert("Your order has been cancelled.\nThank You for Visiting Sweetshop.\nPlease Login again.");

        window.location.href = "index.html";
    });
});