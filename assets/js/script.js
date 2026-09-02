function Login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if (username == "Grayson0407" && password == "Grayson0407") {
        alert("Login Successfully!");
        window.location.href = "pages/idgenerator.html";
        return false;
    } else {
        alert("Nice Try....");
        return false;
    }
}
