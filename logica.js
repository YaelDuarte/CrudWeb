var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Obtiene la información
function readFormData() {
    var formData = {};
    formData["idProducto"] = document.getElementById("idProducto").value;
    formData["producto"] = document.getElementById("producto").value;
    formData["cantidad"] = document.getElementById("cantidad").value;
    formData["precio"] = document.getElementById("precio").value;
    return formData;
}

//Ingresa la información
function insertNewRecord(data) {
    var table = document.getElementById("listaTienda").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.idProducto;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.producto;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.cantidad;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.precio;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Editar</button> <button onClick="onDelete(this)"></button>`;
}

//Editar
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("idProducto").value = selectedRow.cells[0].innerHTML;
    document.getElementById("producto").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cantidad").value = selectedRow.cells[2].innerHTML;
    document.getElementById("precio").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.idProducto;
    selectedRow.cells[1].innerHTML = formData.producto;
    selectedRow.cells[2].innerHTML = formData.cantidad;
    selectedRow.cells[3].innerHTML = formData.precio;
}

//Eliminar
function onDelete(td) {
    if (confirm('¿Estas Seguro de eliminar este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById('listaTienda').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reiniciar
function resetForm() {
    document.getElementById("idProducto").value = '';
    document.getElementById("producto").value = '';
    document.getElementById("cantidad").value = '';
    document.getElementById("precio").value = '';
    selectedRow = null;
}