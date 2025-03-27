document.addEventListener("DOMContentLoaded", () => {
    const catalogButton = document.getElementById("catalog-button");
    const dropdown = document.getElementById("dropdown");

    catalogButton.addEventListener("click", () => {
        const isVisible = dropdown.style.display === "block";
        dropdown.style.display = isVisible ? "none" : "block";
    });

    document.addEventListener("click", (event) => {
        if (!dropdown.contains(event.target) && event.target !== catalogButton) {
            dropdown.style.display = "none";
        }
    });
    // Закрытие корзины при клике вне
    document.addEventListener("click", (event) => {
        const cartMenu = document.getElementById("cart-menu");
        const cartIcon = document.querySelector(".cart");

        if (!cartMenu.contains(event.target) && !cartIcon.contains(event.target)) {
            cartMenu.classList.add("hidden");
        }
    });
});