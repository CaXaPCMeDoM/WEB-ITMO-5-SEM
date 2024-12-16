document.addEventListener("DOMContentLoaded", () => {
    const userAuthDiv = document.getElementById("user-auth");

    const isLoggedIn = checkAuth();

    userAuthDiv.addEventListener("click", (event) => {
        event.preventDefault();

        if (isLoggedIn) {
            showUserMenu();
        } else {
            window.location.href = "login/login.html";
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


document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const cartMenu = document.getElementById("cart-menu");
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");

    // Обновление содержимого корзины
    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.title} - ${item.price} руб. x ${item.quantity}`;
            cartList.appendChild(li);

            total += item.price * item.quantity;
        });

        cartTotal.textContent = `Общая сумма: ${total} руб.`;
    }

    // Добавление товара в корзину
    function addToCart(title, price) {
        if (isNaN(price) || price <= 0) {
            console.error(`Некорректная цена: ${price}`);
            return;
        }

        const existingItem = cartItems.find(item => item.title === title);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ title, price, quantity: 1 });
        }

        updateCart();
    }

    // Обработчик кнопок "Добавить в корзину"
    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", () => {
            const title = button.getAttribute("data-title");
            const price = parseInt(button.getAttribute("data-price"), 10);

            addToCart(title, price);
        });
    });

    document.querySelector(".cart").addEventListener("click", () => {
        cartMenu.classList.toggle("hidden");
    });

});


