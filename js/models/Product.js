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
        `;

    return row;
};