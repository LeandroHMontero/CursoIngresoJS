/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	const DESCUENTO = 25;
	let precio;
	let precioConDescuento;

	precio = parseInt(document.getElementById("txtIdImporte").value);

	precioConDescuento = precio-((precio*DESCUENTO)/100);
	document.getElementById("txtIdResultado").value=precioConDescuento;
}
