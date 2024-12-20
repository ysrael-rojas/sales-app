function Product(name, price, stock) {
    this.id = Date.now();
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.createdAt = new Date();
}

Product.prototype.updateStock = function(quantity) {
    
    if (this.stock + quantity < 0) {
        throw new Error('Datos inválidos');
    }

    this.stock += quantity;
}

Product.prototype.getFormattedPrice = function() {

    const formatter = new Intl.NumberFormat('es-PE', { 
        style: 'currency', 
        currency: 'PEN' 
    });

    return formatter.format(this.price);
};

Product.prototype.getProductInfo = function() {
    
    return {
        name: this.name,
        precio: this.getFormattedPrice(),
        stock: this.stock
    };
};

Product.prototype.renderUI = function(index) {
    
    const {name, precio, stock} = this.getProductInfo();

    const row = document.createElement("tr");

    row.innerHTML = `
        <th>${index}</th>
        <td>${name}</td>
        <td>${precio}</td>
        <td>${stock}</td>
        <td d-flex justify-content-center align-items-center>
            <button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
            <button class="btn btn-primary btn-sm ms-2"><i class="bi bi-pencil"></i></button>
        </td>
        `;

    return row;
};