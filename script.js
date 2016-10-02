function sumar() {
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 = parseFloat(document.getElementById('n2').value);

	var res = n1+n2;

	mostrarResultado(res);
}

function resta() {
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 = parseFloat(document.getElementById('n2').value);

	var res = n1-n2;

	mostrarResultado(res);
}

function multi() {
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 = parseFloat(document.getElementById('n2').value);

	var res = n1*n2;

	mostrarResultado(res);
}

function divis() {
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 = parseFloat(document.getElementById('n2').value);

	var res = n1/n2;

	mostrarResultado(res);
}

function mostrarResultado(res) {

	document.getElementById("re").value = res;
}