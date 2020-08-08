
function mostrar()
{
	/* Lo que hay que hacer

	* Validar el tipo de datos.
	*Precio del producto
	*Cantidad de unidades
	*Marca y Fabricante

	A) Del alcohol mas barato necesitamos la cantidad y el fabricante
	B)Del producto con mas unidades, el promedio de compra
	C)Unidades de Jabon en total */

	let tipoProducto;
	let precioProducto;
	let cantUnidades;
	let marca;
	let fabricante;
	let alcoholBarato;
	let fabricanteAlcoholBarato;
	let promedioCompra;
	let productoMayorCantidad;
	let contAlcoholBarato = 0;
	let contAlcohol = 0;
	let contBarbijo = 0;
	let contJabon = 0;
	let acumPrecioAlcohol=0;
	let acumPrecioBarbijo=0;
	let acumPrecioJabon=0;
	let flagAlcohol=0;
	let respuesta;

	do{
		tipoProducto = prompt("Ingrese el tipo de producto: alcohol, barbijo, jabon");
		tipoProducto = tipoProducto.toLowerCase();
		while(tipoProducto != "alcohol" && tipoProducto != "barbijo" && tipoProducto != "jabon")
		{
			tipoProducto = prompt("Producto incorrecto. Ingrese: alcohol, barbijo, jabon");
			tipoProducto = tipoProducto.toLowerCase();
		}

		precioProducto = parseFloat(prompt("Precio del producto"));
		while(precioProducto<=0 || isNaN(precioProducto)){
			precioProducto = parseFloat(prompt("Valor no valido. Ingrese el precio del producto"));
		}

		cantUnidades = parseInt(prompt("Ingrese la cantidad de unidades del producto"));
		while(cantUnidades<=0 || isNaN(cantUnidades)){
			cantUnidades = parseInt(prompt("Valor no valido. Ingrese el precio del producto"));
		}

		marca = prompt("Marca del producto");
		fabricante = prompt("Fabricante del producto");

		switch(tipoProducto){
			case "alcohol":
				contAlcohol += cantUnidades;
				acumPrecioAlcohol+=precioProducto;
				if (flagAlcohol==0 || precioProducto<alcoholBarato)
				{
					alcoholBarato = precioProducto;
					contAlcoholBarato=cantUnidades;
					fabricanteAlcoholBarato = fabricante;
					flagAlcohol = 1;
				}
				break;
			
			case "barbijo":
				contBarbijo+=cantUnidades;
				acumPrecioBarbijo+=precioProducto;
				break;
			
			case "jabon":
				contJabon+=cantUnidades;
				acumPrecioJabon+=precioProducto;
				break;
		}

		respuesta = prompt("Desea ingresar mas productos? Ingrese SI o NO");
		respuesta = respuesta.toUpperCase();
	} while(respuesta=="SI");
	
	if(contBarbijo>contAlcohol && contBarbijo>contJabon)
	{
		productoMayorCantidad =  "Barbijo";
		promedioCompra = acumPrecioJabon/contJabon;
	}
	else if(contAlcohol>contJabon && contAlcohol>=contBarbijo)
	{
		productoMayorCantidad =  "Alcohol";
		promedioCompra = acumPrecioAlcohol/contAlcohol;
	}
	else
	{
		productoMayorCantidad =  "Jabon";
		promedioCompra = acumPrecioJabon/contJabon;
	}

	alert("El alcohol mas barato es " + alcoholBarato + ", hay " + contAlcoholBarato + " unidades" + " y el fabricante es " + fabricanteAlcoholBarato);
	alert("El producto con mas unidades es " + productoMayorCantidad + " y el promedio de compra es $" + promedioCompra);
	alert("Hay " + contJabon + " unidades de jabon");
}
