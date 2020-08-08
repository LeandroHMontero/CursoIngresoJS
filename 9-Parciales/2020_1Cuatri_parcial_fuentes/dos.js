/*
Cosas que hay que hacer:

*Calcular el importe total de la compra(sin descuento)
*Calcular el importe total pero CON DESCUENTO
*El tipo de producto con mas cantidad de bolsas
*El tipo de producto mas caro

*/


function mostrar()
{
  let tipo;
  let cantidadBolsas;
  let precioBolsa;
  let precioTotalArena;
  let precioTotalCal;
  let precioTotalCemento;
  let productoMasCaro;
  let mayorCantidadBolsas;
  let cantBolsasTotales;
  let importeTotal;
  let importeConDescuento;
  let respuesta;
  let acumBolsasCemento=0;
  let acumBolsasArena=0;
  let acumBolsasCal=0;
  let acumPrecioCemento = 0;
  let acumPrecioArena = 0;
  let acumPrecioCal = 0;
  let descuento=0;
  

  do{
    
    tipo = prompt("Ingrese el producto que comprara: arena , cemento o cal ");
    tipo = tipo.toLowerCase();
   
    while (tipo!= "arena" && tipo != "cemento" && tipo!= "cal"){
      tipo = prompt("Producto invalido. Opciones disponibles: arena, cemento, cal");
    }

    cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas que comprara"));
   
    while(cantidadBolsas<=0 || isNaN(cantidadBolsas)){
      cantidadBolsas = parseInt(prompt("Error: se ingreso 0, numero negativo o una palabra. Ingrese nuevamente"));
    }

    precioBolsa = parseFloat(prompt("Ingrese el precio de cada bolsa"));
    
    while(precioBolsa<=0 || isNaN(precioBolsa)){
      precioBolsa = parseFloat(prompt("Error. se ingreso 0, numero negativo o una palabra. Ingrese nuevamente"));
    }

    switch(tipo)
    {
      case "arena":
        acumBolsasArena += cantidadBolsas;
        acumPrecioArena += precioBolsa;
        precioTotalArena = acumBolsasArena*acumPrecioArena;
        break;

      case "cemento":
        acumBolsasCemento += cantidadBolsas;
        acumPrecioCemento += precioBolsa;
        precioTotalCemento = acumBolsasCemento*acumPrecioCemento;
        break;

      case "cal":
        acumBolsasCal += cantidadBolsas;
        acumPrecioCal += precioBolsa;
        precioTotalCal = acumBolsasCal*acumPrecioCal;
        break;
    }

    respuesta = prompt("Desea seguir ingresan productos. Escribir SI o NO");
    respuesta = respuesta.toUpperCase();
  } while(respuesta=="SI");

  cantBolsasTotales = acumBolsasCal + acumBolsasCemento + acumBolsasArena;
  
  //Punto A
  importeTotal = precioTotalArena+precioTotalCal+precioTotalCemento;
  //Punto B
  if (cantBolsasTotales>10 && cantBolsasTotales<=30)
  {
    importeConDescuento = importeTotal - ((10*importeTotal)/100);
    descuento = 1;
  }
  else if (cantBolsasTotales > 30)
  {
    importeConDescuento = importeTotal - ((25*importeTotal)/100);
    descuento = 1;
  }
  
  //Punto C
  if(acumBolsasCal > acumBolsasCemento && acumBolsasCal > acumBolsasArena)
  {
    mayorCantidadBolsas = "Cal"
  }
  else if (acumBolsasArena > acumBolsasCemento && acumBolsasArena >= acumBolsasCal)
  {
    mayorCantidadBolsas = "Arena";
  }
  else{
    mayorCantidadBolsas = "Cemento";
  }

  //Punto D
  if(acumPrecioCal> acumPrecioCemento && acumPrecioCal > acumPrecioArena)
  {
    productoMasCaro = "Cal"
  }
  else if (acumPrecioArena > acumPrecioCemento && acumPrecioArena >= acumPrecioCal)
  {
    productoMasCaro = "Arena";
  }
  else{
    productoMasCaro = "Cemento";
  }

  if(descuento==0){
  alert("1) El importe total en bruto es $" + importeTotal +
        "\n2) No te corresponde descuento\n"+
        "3) El tipo de producto con mas bolsas es " + mayorCantidadBolsas + 
        "\n 4) El tipo mas caro es " + productoMasCaro
        );}

  else{ 
    alert("1) El importe total en bruto es $" + importeTotal +
        "\n2) Te corresponde un descuento. El precio final es $"+ importeConDescuento +
        "\n3) El tipo de producto con mas bolsas es " + mayorCantidadBolsas + 
        "\n4) El tipo mas caro es " + productoMasCaro);}

  }




