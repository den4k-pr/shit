document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const manage = document.querySelector("#manage");
    const manageButton = document.querySelector(".buttonFormActive");
    const colorSelect = document.getElementById('color');
    const sizeSelect = document.getElementById('size');
    const url = new URL(window.location.href);

    let product = {
        name: "",
        color: "",
        size: ""
    };

    const urlSlug = url.searchParams.get('slug');
    const value = url.searchParams.get('id');

    manage.addEventListener("click", (event) => {
        if (event.target === manage) {
            manage.classList.remove('active');
        }
    });

    form.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    manageButton.addEventListener("click", () => {
        manage.classList.add("active");

        const productNameElement = manageButton.parentElement.getElementsByClassName("productContent__info-name")[0];

        if (productNameElement) {
            product.name = productNameElement.textContent;
        }

        console.log(product);
    });

    colorSelect.addEventListener("change", () => {
        product.color = colorSelect.value;
        console.log(`Color selected: ${product.color}`);
    });

    sizeSelect.addEventListener("change", () => {
        product.size = sizeSelect.value;
        console.log(`Size selected: ${product.size}`);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const tel = document.querySelector("#tel").value;

        const token = "7022110010:AAEVjTvP5048aqEkyzZX7bsOXxmnxL24Q7E";
        const chat_id = "5117219821";
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=Ім'я: ${name},
         Телефон: ${tel}, 
         Товар: ${product.name}, 
         Колір: ${product.color}, 
         Розмір: ${product.size}`;

        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();

        alert("Замовлення успішно відправленно, очікуйте ми вам зателефонуємо!")
        
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    });
});
