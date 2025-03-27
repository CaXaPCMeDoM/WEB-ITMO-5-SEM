document.addEventListener("DOMContentLoaded", () => {
    const userAuthDiv = document.getElementById("user-auth");

    const isLoggedIn = checkAuth();

    userAuthDiv.addEventListener("click", (event) => {
        event.preventDefault();

        if (isLoggedIn) {
            showUserMenu();
        } else {
            window.location.href = "../../login/login.html";
        }
    });

    function checkAuth() {
        const token = getCookie("authToken");
        return !!token;
    }

    function getCookie(name) {
        const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
        return match ? match[2] : null;
    }

    function showUserMenu() {
        const dropdown = document.getElementById("options_dropdown");
        const isVisible = dropdown.style.display === "block";
        dropdown.style.display = isVisible ? "none" : "block";
    }
});
