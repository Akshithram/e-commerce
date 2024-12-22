const logoutButton = document.getElementById('logoutButton');
const productCategories = document.getElementById('productCategories');
const productList = document.getElementById('productList');
const productDetails = document.getElementById('productDetails');
const productsContainer = document.getElementById('products');
const categoryTitle = document.getElementById('categoryTitle');
const productDetailsContent = document.getElementById('productDetailsContent');

let productsData = {
    electronics: [
        { name: 'Smartphone', description: 'Latest model with great features', price: '69,999 INR', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdedYH3zG0FNaBb2xy6jL_Rhh-Ab2xDAc2A&s' },
        { name: 'Laptop', description: 'High-performance laptop for work and gaming', price: '1,20,999 INR', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnb_LLk9J4grfBANSw8rOG19lv3hKGjPLTug&s' },
    ],
    fashion: [
        { name: 'Jacket', description: 'Stylish leather jacket', price: '1999 INR', img: 'https://media.istockphoto.com/id/1074239872/photo/a-studio-portrait-of-young-man-wearing-winter-coat.webp?a=1&b=1&s=612x612&w=0&k=20&c=JnBfF1CyWDrPorHiThwNLLuB3DwvViMOGRsajUF22mQ=' },
        { name: 'Shoes', description: 'Comfortable running shoes', price: '799 INR', img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
    ],
    home: [
        { name: 'Sofa', description: 'Modern design with comfortable seating', price: '14,499 INR', img: 'https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D' },
        { name: 'Coffee Table', description: 'Elegant coffee table for your living room', price: '12,199 INR', img: 'https://images.pexels.com/photos/932095/pexels-photo-932095.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ]
};

let currentCategory = '';

logoutButton.addEventListener('click', () => {
    alert("You have been logged out.");
    // You can also reset session or cookies if needed
    window.location.reload();  // Simply reload to reset the state
});

function showProducts(category) {
    currentCategory = category;
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    productsContainer.innerHTML = '';
    productsData[category].forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('productCard');
        productCard.onclick = () => showProductDetails(product);
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productsContainer.appendChild(productCard);
    });
    productList.classList.remove('hidden');
}

function showProductDetails(product) {
    productDetailsContent.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>Price: ${product.price}</strong></p>
    `;
    productDetails.classList.remove('hidden');
    productList.classList.add('hidden');
}

function goBackToProducts() {
    productDetails.classList.add('hidden');
    productList.classList.remove('hidden');
}
