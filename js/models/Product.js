function Product(name, price, stock) {
    this.id = Date.now();
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.createdAt = newDate();
}

Product.prototype.updateStock = function(quantity) {
// Actualiza el stock y valida que no sea negativo
    if (this.stock + quantity < 0) {
        throw new Error('Datos inválidos');
    }

    this.stock += quantity;
}

Product.prototype.getFormattedPrice = function() {
    // Retorna el precio formateado como moneda (S/ 1,500.00)

    const formatter = new Intl.NumberFormat('es-PE', { 
        style: 'currency', 
        currency: 'PEN' 
    });

    return formatter.format(this.price);
};

Product.prototype.getProductInfo = function() {
    // retorna: Pelota Adidas - S/ 389.00 (Stock: 14)
    return `${this.name} - ${this.getFormattedPrice()} (Stock: ${this.stock})`;
};

Product.prototype.renderUI = function() {
    // retornar un elemento HTML `li` con la información del producto
    const li = document.createElement('li');
    li.textContent = this.getProductInfo();
    return li;
};