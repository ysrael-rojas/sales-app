const $formProduct = document.getElementById("form-product");
const $formCustomer = document.getElementById("form-customer");

const tableBodyProduct = document.getElementById("tableBodyProduct");
const tableBodyCustomer = document.getElementById("tableBodyCustomer");

let productList = [];
let customerList = [];
let indexEdit = null;
let indexEditProduct = null;

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

	if (!customerFieldsValidator(form.nameCustomer.value, form.email.value)) {
		Swal.fire("Error", "Por favor ingresa todos los campos", "error");
		return;
	}

	const customer = new Customer(form.nameCustomer.value, form.email.value);

	customerList.push(customer);

	viewCustomerList();

	form.reset();
}

function viewProductList() {
	tableBodyProduct.innerHTML = "";

	let index = 1;

	productList.forEach((product) => {
		tableBodyProduct.appendChild(product.renderUI(index));
		index++;
	});
}

function viewCustomerList() {
	tableBodyCustomer.innerHTML = "";

	let index = 1;

	customerList.forEach((customer) => {
		tableBodyCustomer.appendChild(customer.renderUI(index));
		index++;
	});
}

function showModalUpdateCustomer(index) {

	indexEdit = index - 1;
	const {name, email} = customerList[indexEdit];
	document.getElementById("nameModal").value = name;
	document.getElementById("emailModal").value = email;
	const modal = new bootstrap.Modal(document.getElementById("modalEdit"));
	modal.show();
}

function showModalUpdateProduct(index) {

	indexEditProduct = index - 1;
	const {name, price, stock} = productList[indexEditProduct];
	document.getElementById("nameModalProduct").value = name;
	document.getElementById("priceModalProduct").value = price;
	document.getElementById("stockModalProduct").value = stock;
	const modal = new bootstrap.Modal(document.getElementById("modalEditProduct"));
	modal.show();
}

function deleteCustomer(id, index) {
	Swal.fire({
		title: "¿Estás seguro?",
		text: "¡Esta acción no se puede deshacer!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonText: "Sí, eliminar",
		cancelButtonText: "Cancelar",
		reverseButtons: true,
	}).then((result) => {
		if (result.isConfirmed) {

			const customerToRemove = customerList[index-1];

			customerToRemove.removeCustomer(id, customerList);

			viewCustomerList();

			Swal.fire("Eliminado!", "El cliente ha sido eliminado.", "success");

		} else {

			Swal.fire("Cancelado", "La eliminación fue cancelada.", "info");
		}
	});
}

function deleteProduct(id, index) {
	Swal.fire({
		title: "¿Estás seguro?",
		text: "¡Esta acción no se puede deshacer!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonText: "Sí, eliminar",
		cancelButtonText: "Cancelar",
		reverseButtons: true,
	}).then((result) => {
		if (result.isConfirmed) {

			const productToDelete = productList[index - 1];

			productToDelete.removeProduct(id, productList);

			viewProductList();
			
			Swal.fire("Eliminado!", "El producto ha sido eliminado.", "success");

		} else {

			Swal.fire("Cancelado", "La eliminación fue cancelada.", "info");
		}
	});
}

function customerFieldsValidator(name, email) {

  	return !name || !email || !email.includes("@") ? false : true;
}

function productFieldsValidator(name, price, stock) {

	return !name || !price || !stock || price <= 0 || stock < 0 ? false : true;
}

function handleUpdateCustomer(event) {
	const name = document.getElementById("nameModal").value;
	const email = document.getElementById("emailModal").value;

	if (!customerFieldsValidator(name, email)) {
		Swal.fire("Error", "Por favor ingresa todos los campos", "error");
		return;
	}

	const customer = customerList[indexEdit];

	customer.updateCustomer(name, email);

	viewCustomerList();

	const modal = bootstrap.Modal.getInstance(
		document.getElementById("modalEdit")
	);
	modal.hide();
}

function handleUpdateProduct(event) {

	const name = document.getElementById("nameModalProduct").value;
	const price = document.getElementById("priceModalProduct").value;
	const stock = document.getElementById("stockModalProduct").value;

	if (!productFieldsValidator(name, price, stock)) {
		Swal.fire("Error", "Por favor ingresa todos los campos", "error");
		return;
	}

	const product = productList[indexEditProduct];

	product.updateProduct(name, price, stock);

	viewProductList();

	const modal = bootstrap.Modal.getInstance(
		document.getElementById("modalEditProduct")
	);
	modal.hide();
}

document.getElementById("guardarCambios")
        .addEventListener("click", handleUpdateCustomer);
document.getElementById("guardarCambiosProduct")
		.addEventListener("click", handleUpdateProduct);

$formProduct.addEventListener("submit", handleNewProduct);
$formCustomer.addEventListener("submit", handleNewCustomer);
