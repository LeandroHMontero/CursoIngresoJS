var barbijo = []; //guardar marca y fabricante
var jabon = [];//guardar marca y fabricante
var alcohol = [];//guardar marca y fabricante

var precio_alcohol = [];
var precio_jabon = [];
var precio_barbijo = [];

var uni_alcohol = [];
var uni_jabon = [];
var uni_barbijo = [];

var fabric_alco= [];
var fabric_jab= [];
var fabric_barb= [];

var min_alco;
var menor_uni_alco;

var indice;
var indice_bar=0;
var indice_alco=0;
var indice_jab=0;

var cant_alco=0;
var cant_barb=0;
var cant_jab=0;
var mayor_cantidad;
var promedio;
var acumulador=0;

var opcion;

for (indice = 0; indice < 2; indice++)
{
    opcion = prompt("Ingrese el tipo de producto: barbijo, jabon o alcohol");
    while((opcion!="barbijo")&&(opcion!="jabon")&&(opcion!="alcohol"))
    {
        opcion = prompt("Opcion incorrecta. Ingrese el tipo de producto de la misma forma que esta escrito antes")
    }

    if(opcion == "barbijo")
    {
        
            barbijo[indice_bar] = prompt("Ingrese la marca del barbijo");
            fabric_barb[indice_bar] = prompt("Ingrese el fabricante del barbijo");
            precio_barbijo[indice_bar] = prompt("Ingrese el precio del barbijo");
            precio_barbijo[indice_bar] = parseInt(precio_barbijo[indice_bar]);
            uni_barbijo[indice_bar] = prompt("Cantidad de unidades que ingresara");
            uni_barbijo[indice_bar] = parseInt(uni_barbijo[indice_bar]);
            cant_barb+=uni_barbijo[indice_bar];
            indice_bar+=1;

        
    }

    else if(opcion == "jabon")
    {
        
            jabon[indice_jab] = prompt("Ingrese la marca del jabon");
            fabric_jab= [indice_jab]=prompt("Ingrese el fabricante");
            precio_jabon[indice_jab] = prompt("Ingrese el precio del jabon");
            precio_jabon[indice_jab] = parseInt(precio_jabon[indice_jab]);
            uni_jabon[indice_jab] = prompt("Cantidad de unidades que ingresara");
            uni_jabon[indice_jab] = parseInt(uni_jabon[indice_jab]);
            cant_jab+=uni_jabon[indice_jab];
            indice_jab+=1;
        
    }

    else
    {
        
            alcohol[indice_alco] = prompt("Ingrese la marca del alcohol");
            fabric_alco[indice_alco] = prompt("Ingrese el fabricante");
            precio_alcohol[indice_alco] = prompt("Ingrese el precio");
            precio_alcohol[indice_alco] = parseInt(precio_alcohol[indice_alco]);
            uni_alcohol[indice_alco] = prompt("Cantidad de unidades que ingresara");
            uni_alcohol[indice_alco] = parseInt(uni_alcohol[indice_alco]);
            cant_alco+=uni_alcohol[indice_alco];
            indice_alco+=1;
        
    }


}

//Punto 1
if (cant_alco>0)
{
for(indice=0; indice< precio_alcohol.length; indice++)
{
    if(indice==0)
    {
        min_alco = fabric_alco[indice];
        menor_uni_alco = uni_alcohol[indice];
        
    }
    
    else if(precio_alcohol[indice]>precio_alcohol[indice-1]){
        min_alco = fabric_alco[indice-1];
        menor_uni_alco = uni_alcohol[indice-1];
    }   
    else{
        min_alco = fabric_alco[indice];
        menor_uni_alco = uni_alcohol[indice];
        
    }

}
console.log("El fabricante con el menor precio para alcohol es: " +min_alco+" y contamos con " + menor_uni_alco+" unidades");
}




// Punto 2

if ((cant_alco > cant_barb) && (cant_alco>cant_jab)){
    mayor_cantidad = "ALCOHOL";
    for(indice=0; indice<uni_alcohol.length;indice++)
    {
        acumulador = uni_alcohol[indice] + acumulador;
    }
    promedio = acumulador/cant_alco;
}

if ((cant_barb > cant_alco) && (cant_barb>cant_jab)){
    mayor_cantidad = "BARBIJO";
    for(indice=0; indice<uni_barbijo.length;indice++)
    {
        acumulador = uni_barbijo[indice] + acumulador;
    }
    promedio = acumulador/cant_barb;
}
if ((cant_jab > cant_alco) && (cant_jab>cant_barb)){
    mayor_cantidad = "JABON";
    for(indice=0; indice<uni_jabon.length;indice++)
    {
        acumulador = uni_jabon[indice] + acumulador;
    }
    promedio = acumulador/cant_jab;
}

console.log("El tipo de producto con mas cantidad es: " +mayor_cantidad+", contamos con un promedio de compra de " + promedio+" unidades");

//Punto 3
console.log("La cantidad de jabones totales es de: " +cant_jab+" unidades");


