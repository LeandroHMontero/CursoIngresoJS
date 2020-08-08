function mostrar()
{
	let nombre;
	let nombreMayorTemp;
	let edad;
	let sexo;
	let estadoCivil;
	let tempCuerpo;
	let tempMinima=0;
	let respuesta;
	let cantSolteros=0;
	let cantViudos = 0;
	let edadSolteros=0;
	let promedioEdadSolteros;
	let cantSolterosYViudos=0;
	let tempMaxima;
	let personaMayorTemperatura=0;

	do{
		nombre = prompt("Ingrese el nombre del pasajero");
		edad = parseInt(prompt("Ingrese la edad del pasajero"));
		while (edad <= 0 || isNaN(edad))
		{
			edad = parseInt(prompt("Opcion no valida. Ingrese nuevamente"));
		}

		sexo = prompt("Escriba f o m para indicar el sexo de la persona");
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Opcion no valida. Ingrese nuevamente");
		}

		estadoCivil = prompt("Ingrese el estado civil del pasajero");
		
		
		while(estadoCivil != "soltero" && estadoCivil != "viudo" && estadoCivil != "casado"){
			estadoCivil = prompt("Opcion no valida. Ingrese nuevamente");
		}

		tempCuerpo = parseFloat(prompt("Ingrese la temperatura del pasajero"));
		while (tempCuerpo <= 0 || isNaN(tempCuerpo)){
			tempCuerpo = parseFloat(prompt("Opcion no valida. Ingrese nuevamente"));
		}

		//Punto A
		if (tempMaxima < tempCuerpo)
		{
			tempMaxima = tempCuerpo;
			nombreMayorTemp = nombre;
		}
		else{
			tempMaxima = tempMinima;
		}		

		//Punto B
		if (edad >= 18 && estadoCivil == "viudo")
		{
			cantViudos+=1;
			
		} 
		
		//Punto C
		if(sexo == "m" && estadoCivil == "viudo")
		{
			cantSolterosYViudos+=1;
		}
		else if (sexo == "m" && estadoCivil == "soltero")
		{
			cantSolterosYViudos+=1;
			cantSolteros+=1;
			edadSolteros+=edad;
		}

		//Punto D

		if(edad>60 && tempCuerpo > 38)
		{
			personaMayorTemperatura+=1;
		}

		respuesta = prompt("Para agregar mas ppasajeros ingrese SI, de lo contrario ingrese NO");
		respuesta = respuesta.toUpperCase();
		

	} while(respuesta=="SI");

	//Punto E
	promedioEdadSolteros = parseFloat(edadSolteros/cantSolteros);
	
	alert("La persona con mayor temperatura es " + nombreMayorTemp);
	alert("Hay " + cantViudos + " personas mayores de edad viudas");
	alert("Hay " + cantSolterosYViudos + " hombre solteros o viudos");
	alert("Hay " + personaMayorTemperatura + " personas mayores de 60 con temperatura superior a 38°");
	
	if(cantSolteros==0)
	{
		alert("No hay hombres solteros");

	}
	else{
		alert("La edad promedio de los hombres solteros es de " + promedioEdadSolteros);

	}
	

	} 

	


