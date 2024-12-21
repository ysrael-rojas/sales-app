function Sale(customer, date = new Date()) {
    // Validar que customer sea instancia de Customer
    if (!(customer instanceof Customer)) {
        throw new Error('Cliente inválido');
    }

    // Propiedades:
    // - id (Date.now())
    // - customer
    // - products (array vacío para iniciar)
    // - total (inicia en 0)
    // - date
    // - status ('pending' | 'completed' | 'cancelled')
    this.id = Date.now();
    this.customer = customer;
    this.products = [];
    this.total = 0;
    this.date = date;
    this.status = 'pending';
}

// Métodos del prototipo:
Sale.prototype.addProduct = function(product, quantity) {
    // Validar que product sea instancia de Product
    if (!(customer instanceof Customer)) {
        throw new Error('Cliente invalido');
    }
    // Validar stock suficiente
    if (product.stock <= quantity) {
        throw new Error('Stock insuficiente');
    }
    // Agregar al array products: { product, quantity }
    this.products.push({
        product,
        quantity
    });
    // Actualizar total
};

Sale.prototype.removeProduct = function(productId) {
    // Eliminar producto del array
    // Actualizar total
};

Sale.prototype.calculateTotal = function() {
    // Sumar (producto.price * cantidad) de cada item
   /*  this.products.reduce((total, product) => {
        return total + ()
    }, 0); */
};

Sale.prototype.complete = function() {
    // Validar que haya productos
    // Actualizar stock de cada producto
    // Incrementar contador del cliente
    // Cambiar status a 'completed'
};

Sale.prototype.renderUI = function() {
    // Retornar elemento HTML con el detalle de la venta
};