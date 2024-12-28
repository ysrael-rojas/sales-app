function Customer(name, email) {
    this.id = Date.now();
    this.name = name;
    this.email = email;
    this.totalPurchases = 0;
    this.createdAt = new Date();
}

Customer.prototype.updateCustomer = function(name,email) {
  
    this.name = name;
    this.email = email;
};

Customer.prototype.deleteCustomer = function(id) {
    
}

Customer.prototype.getCustomerInfo = function() {

    return {
        id: this.id,
        name: this.name,
        email: this.email
    };
};

Customer.prototype.removeCustomer = function(id, customerList) {

    const indexDelete = customerList.findIndex( (customer) => customer.id === id );

    if (indexDelete !== -1) {
        customerList.splice(indexDelete, 1);
    }
}

Customer.prototype.renderUI = function(index) {

    const {id, name, email} = this.getCustomerInfo();

    const row = document.createElement("tr");

    row.innerHTML = `
        <th>${index}</th>
        <td>${name}</td>
        <td>${email}</td>
        <td d-flex justify-content-center align-items-center>
            <button class="btn btn-danger btn-sm" onclick="deleteCustomer(${id}, ${index})"><i class="bi bi-trash"></i></button>
            <button class="btn btn-primary btn-sm ms-2" onclick="showModalUpdateCustomer(${index})"><i class="bi bi-pencil"></i></button>
        </td>
        `;

    return row;
};

Customer.prototype.renderSelectUI = function(customers) {

    const select = document.getElementById();

    
}