/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let promedioPositivos;
	let promedioNegativos;
	let difereciaPosYNeg;
	let sumaNegativos=0;
	let sumaPositivos=0;
	let cantPositivos=0;
	let cantNegativos=0;
	let cantCeros=0;
	let cantPares=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero positivo, negativo o 0"));
		if(numeroIngresado > 0 && (numeroIngresado%2)==0)
		{
			sumaPositivos+=numeroIngresado;
			cantPositivos+=1;
			cantPares+=1;
		}
		else if (numeroIngresado > 0 && (numeroIngresado%2)!=0)
		{
			sumaPositivos+=numeroIngresado;
			cantPositivos+=1;
		}
		else if(numeroIngresado < 0 && (numeroIngresado%2)==0)
		{
			sumaNegativos+=numeroIngresado;
			cantNegativos+=1;
			cantPares+=1;
		}
		else if(numeroIngresado < 0 && (numeroIngresado%2)!=0)
		{
			sumaNegativos+=numeroIngresado;
			cantNegativos+=1;
		}
		else{
			cantCeros+=1;
		}
		respuesta=prompt("desea continuar?");
	}//fin del while

	promedioPositivos = parseFloat(sumaPositivos/cantPositivos);
	promedioNegativos = parseFloat(sumaNegativos/cantNegativos);

	document.write("la suma de negativos es :"+sumaNegativos+"<br>");
	document.write("la suma de positivos es :"+sumaPositivos+"<br>");
	document.write("La cantidad de positivos es: " + cantPositivos+"<br>");
	document.write("La cantidad de negativos es: " + cantNegativos+"<br>");
	document.write("La cantidad de 0's que hay es: "+cantCeros+"<br>");
	document.write("La cantidad de numeros pares es: "+ cantPares+"<br>");
	document.write("El promedio de los numeros positivos es: " + promedioPositivos+"<br>");
	document.write("El promedio de los numeros negativos es: " + promedioNegativos+"<br>");
	document.write("La diferencia entre positivos y negativos es: " + (sumaPositivos-sumaNegativos));

}//FIN DE LA FUNCIÓN