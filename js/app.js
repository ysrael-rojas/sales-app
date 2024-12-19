const $formProduct = document.getElementById('form-product');
const tableBody = document.getElementById('tableBody');

let productList = [];

$formProduct.addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;

    const product = new Product(
        form.nameProduct.value, 
        form.precio.value, 
        form.stock.value
    );

    productList.push(product);

    viewProductList();

    form.reset();
});

function viewProductList() {
    
    tableBody.innerHTML = '';
    
    let index = 1;
    
    productList.forEach((product) => {
        tableBody.appendChild(product.renderUI(index));
        index++;
    });
}