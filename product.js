const searchInput = document.getElementById('searchInput');
const cateGory = document.getElementById('cateGory');
const productList = document.getElementById('productList');

let product = [
    {
        name: "School bag",
        category: "accessories",
        price: 42.00,
        image: "IMG/schoolbag.jpg"
    },
    {
        name: "Notebook",
        category: "accessories",
        price: 9.99,
        image: "IMG/notebook.jpg"
    },
    {
        name: "Curve Lamp",
        category: "electronics",
        price: 25.55,
        image: "IMG/curvelamp.png"
    },
    {
        name: "Lamp ball",
        category: "electronics",
        price: 30.00,
        image: "IMG/lamp.jpg"
    },
    {
        name: "Cereamic Mug",
        category: "home",
        price: 12.25,
        image: "IMG/mug.png"
    },
    {
        name: "Water Bottle",
        category: "home",
        price: 13.00,
        image: "IMG/waterbottle.jpg"
    }
];
let filter = 'all';

cateGory.addEventListener('change', () => {
    filter = cateGory.value;
    displayProducts();
});

searchInput.addEventListener('input', () => {
    displayProducts();
});

function displayProducts() {
    productList.innerHTML = '';

    const searchWord = searchInput.value.toLowerCase();
    product.forEach((item, index) => {
        if (filter !==  "all" && item.category !== filter) {
            return;
        }

        if (searchWord && !item.name.toLowerCase().includes(searchWord)) {
            return;
        }

        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p class="group">${item.category}</p>
        <div class="flex">
        <p class="money">$${item.price.toFixed(2)}</p>
        <button onclick="addCart(${index})"> Add to Cart</button>
        </div>
        `;

        productList.appendChild(card);
    });
}

displayProducts();


let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addCart(index) {
    cart.push(product[index]);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product[index].name + " added to cart");
}



