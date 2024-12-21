const $formProduct = document.getElementById('form-product');
const $formCustomer = document.getElementById('form-customer');

const tableBodyProduct = document.getElementById('tableBodyProduct');
const tableBodyCustomer = document.getElementById('tableBodyCustomer');

let productList = [];
let customerList = [];
let customerEdit = null;

function handleNewProduct(event) {

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
}

function handleNewCustomer(event) {

    event.preventDefault();

    const form = event.target;

    const customer = new Customer(
        form.nameCustomer.value,
        form.email.value
    );

    customerList.push(customer);

    viewCustomerList();

    form.reset();
}

function viewProductList() {
    
    tableBodyProduct.innerHTML = '';
    
    let index = 1;
    
    productList.forEach((product) => {
        tableBodyProduct.appendChild(product.renderUI(index));
        index++;
    });
}

function viewCustomerList() {

    tableBodyCustomer.innerHTML = '';

    let index = 1;

    customerList.forEach((customer) => {
        tableBodyCustomer.appendChild(customer.renderUI(index));
        index++;
    });

}

function editarCliente(index) {

    customerEdit = index-1;
    const customer = customerList[index-1];
    document.getElementById('nameModal').value = customer.name;
    document.getElementById('emailModal').value = customer.email;
    const modal = new bootstrap.Modal(document.getElementById('modalEdit'));
    modal.show();
}

function eliminarCliente(index) {

    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡Esta acción no se puede deshacer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            customerList.splice(index-1, 1);
            viewCustomerList();
          Swal.fire(
            'Eliminado!',
            'El cliente ha sido eliminado.',
            'success'
          );
        } else {
          Swal.fire(
            'Cancelado',
            'La eliminación fue cancelada.',
            'info'
          );
        }
      });

    
  }

// Guardar cambios en el modal
document.getElementById('guardarCambios').addEventListener('click', () => {
    const name = document.getElementById('nameModal').value;
    const email = document.getElementById('emailModal').value;
    
    if (!name || !email || !email.includes('@')) {
      Swal.fire('Error', 'Por favor ingresa todos los campos', 'error');
      return;
    }

    const customer = customerList[customerEdit];
    
    customer.updateCustomer(name, email);

    viewCustomerList();

    const modal = bootstrap.Modal.getInstance(document.getElementById('modalEdit'));
    modal.hide();
  });

$formProduct.addEventListener("submit", handleNewProduct);
$formCustomer.addEventListener("submit", handleNewCustomer);