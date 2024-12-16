document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product_list');
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = '<div class="loader"></div>';
    productList.appendChild(preloader);

    const cartItems = [];
    const cartMenu = document.getElementById("cart-menu");
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");

    const showError = (message) => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.textContent = `⚠ ${message}`;
        productList.appendChild(errorDiv);
    };

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                new Error(`HTTP Error: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(error);
            showError('Что-то пошло не так при загрузке данных.');
            return null;
        }
    };

    const updateCart = () => {
        cartList.innerHTML = "";
        let total = 0;

        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.title} - ${item.price} руб. x ${item.quantity}`;
            cartList.appendChild(li);

            total += item.price * item.quantity;
        });

        cartTotal.textContent = `Общая сумма: ${total} руб.`;
    };

    const addToCart = (title, price) => {
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
    };

    const renderData = (data) => {
        preloader.remove();

        if (!data || data.length === 0) {
            showError('Данные отсутствуют.');
            return;
        }

        const list = document.createElement('ul');
        list.className = 'product-list';

        data.forEach((item) => {
            const price = Math.floor(Math.random() * 1000) + 100;
            const listItem = document.createElement('li');
            listItem.innerHTML = `
            <div class="product-card">
                <img class="product-image" src="https://via.placeholder.com/150" alt="Изображение товара">
                <h3 class="product-title">${item.title}</h3>
                <p>${item.body}</p>
                <p class="product-price">Цена: ${price} ₽</p>
                <button class="add-to-cart-btn" data-title="${item.title}" data-price="${price}">
                    Добавить в корзину
                </button>
            </div>`;
            list.appendChild(listItem);
        });

        productList.appendChild(list);

        document.querySelectorAll(".add-to-cart-btn").forEach(button => {
            button.addEventListener("click", () => {
                const title = button.getAttribute("data-title");
                const price = parseInt(button.getAttribute("data-price"), 10);

                addToCart(title, price);
            });
        });
    };

    const randomizeUrl = () => {
        const randomId = Math.random() > 0.5 ? 100 : 200;
        const operator = randomId === 100 ? 'gte' : 'lte';
        return `https://jsonplaceholder.typicode.com/posts?${operator}=id${randomId}`;
    };

    const url = randomizeUrl();
    fetchData(url).then(renderData);

    // Переключение отображения меню корзины
    document.querySelector(".cart").addEventListener("click", () => {
        cartMenu.classList.toggle("hidden");
    });
});
