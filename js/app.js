const $formProduct = document.getElementById('form-product');

let products = [];

$formProduct.addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;


    const product = new Product(form.nameProduct.value, form.precio.value, form.stock.value);

    products.add(product);
});