function Customer(name, email) {
    this.id = Date.now();
    this.name = name;
    this.email = email;
    this.totalPurchases = 0;
    this.createdAt = new Date();
}

Customer.prototype.updateEmail = function(email) {
    // Actualiza el email
    if (!email || !email.includes('@')) {
        throw new Error('Datos inválidos');
    }

    this.email = email;
};

Customer.prototype.getCustomerInfo = function() {
    // retorna: Ysrael Rojas - yrra.rojas@gmail.com
    return `${this.name} - ${this.email}`;
};

Customer.prototype.renderUI = function() {
    // retornar un elemento HTML `li` con la información del cliente
    const li = document.createElement('li');
    li.textContent = this.getCustomerInfo();
    return li;
};