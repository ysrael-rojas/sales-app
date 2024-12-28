function Sale(customer, date = new Date()) {

    if (!(customer instanceof Customer)) {
        throw new Error("Cliente invalido");
    }

    this.id = Date.now();
    this.customer = customer;
    this.products = [];
    this.total = 0;
    this.status = 'pending';
}

Sale.prototype.addProduct = function(product, quantity) {
     // Validar que product sea instancia de Product
    // Validar stock suficiente
    // Agregar al array products: { product, quantity }
    // Actualizar total
}

Sale.prototype.removeProduct = function(productId) {
     // Eliminar producto del array
    // Actualizar total
}

Sale.prototype.calculateTotal = function() {
    // Sumar (producto.price * cantidad) de cada item
}

Sale.prototype.complete = function() {
     // Validar que haya productos
    // Actualizar stock de cada producto
    // Incrementar contador del cliente
    // Cambiar status a 'completed'
}

Sale.prototype.renderUI = function() {
    // Retornar elemento HTML con el detalle de la venta
}