function mostrar()
{
	let nota;
	let minimo=1;
	let maximo=10;
	//Genero el número RANDOM entre 1 y 10 
	nota = Math.round(Math.random() * (maximo-minimo) + minimo);
	alert(nota);

	//En base al numero aleatorio generado muestro un mensaje con la funcion alert()
	if(nota<4)
	{
		alert("Vamos, todavia podes aprobar");
	}
	else if(nota>=4 && nota<=8)
	{
		alert("Aprobo");
	}

	else{
		alert("Excelente");
	}
	

}//FIN DE LA FUNCIÓN