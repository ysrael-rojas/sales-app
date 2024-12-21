function Customer(name, email) {
    this.id = Date.now();
    this.name = name;
    this.email = email;
    this.totalPurchases = 0;
    this.createdAt = new Date();
}

Customer.prototype.updateCustomer = function(name,email) {
   /*  
    if (!email || !email.includes('@')) {
        throw new Error('Datos inválidos');
    } */

    this.name = name;
    this.email = email;
};

Customer.prototype.getCustomerInfo = function() {

    return {
        name: this.name,
        email: this.email
    };
};

Customer.prototype.renderUI = function(index) {

    const {name, email} = this.getCustomerInfo();

    const row = document.createElement("tr");

    row.innerHTML = `
        <th>${index}</th>
        <td>${name}</td>
        <td>${email}</td>
        <td d-flex justify-content-center align-items-center>
            <button class="btn btn-danger btn-sm" onclick="eliminarCliente(${index})"><i class="bi bi-trash"></i></button>
            <button class="btn btn-primary btn-sm ms-2" onclick="editarCliente(${index})"><i class="bi bi-pencil"></i></button>
        </td>
        `;

    return row;
};