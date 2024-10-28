document.addEventListener("DOMContentLoaded", () => {
    const userAuthDiv = document.getElementById("user-auth");
    const userLink = document.getElementById("user-link");

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    userAuthDiv.addEventListener("click", (event) => {
        event.preventDefault();
        if (isLoggedIn) {
            showUserMenu();
        } else {
            window.location.href = "login/login.html";
        }
    });

    function showUserMenu() {
        const authButton = document.getElementById("user-auth");
        const dropdown = document.getElementById("auth_dropdown");
        const isVisible = dropdown.style.display === "block";
        dropdown.style.display = isVisible ? "none" : "block";
    }
});