/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{   
    let cant_lamparas;
    let marca_lamparas;
    let precio_lampara = 35;
    let precioPorCantidad;
    let precio_descuento_lampara;
    let precioConImpuesto;
    

    cant_lamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch(cant_lamparas) 
    {   
        case 3:
            if(marca=="ArgentinaLuz")
            {
                precioPorCantidad = precio_lampara * cant_lamparas;
                precio_descuento_lampara = precioPorCantidad-((15*precioPorCantidad)/100);}
            else if(marca=="FelipeLamparas"){
                precioPorCantidad = precio_lampara * cant_lamparas;
                precio_descuento_lampara = precioPorCantidad-((10*precioPorCantidad)/100);
            }
            else{
                precioPorCantidad = precio_lampara * cant_lamparas;
                precio_descuento_lampara = precioPorCantidad-((5*precioPorCantidad)/100);
            }
            break;

        case 4:
            if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
            {
                precioPorCantidad = precio_lampara * cant_lamparas;
                precio_descuento_lampara = precioPorCantidad-((25*precioPorCantidad)/100);}
            else{
                precioPorCantidad = precio_lampara * cant_lamparas;
                precio_descuento_lampara = precioPorCantidad-((20*precioPorCantidad)/100);
            }
            break;

        case 5:
            if(marca=="ArgentinaLuz")
            {
                precioPorCantidad = precio_lampara * cant_lamparas;
                precio_descuento_lampara = precioPorCantidad-((40*precioPorCantidad)/100);}
            else{
                precioPorCantidad = precio_lampara * cant_lamparas;
                precio_descuento_lampara = precioPorCantidad-((30*precioPorCantidad)/100);
            }
            break;

        case 6:
            precioPorCantidad = precio_lampara * cant_lamparas;
            precio_descuento_lampara = precioPorCantidad-((50*precioPorCantidad)/100);
            break;
    }

    if(precio_descuento_lampara>120){
        precioConImpuesto = precio_descuento_lampara*1.10;
        document.getElementById("txtIdprecioDescuento").value = precioConImpuesto;
        alert("El total a abonar es de $" + precioConImpuesto);
        alert("Usted pago $" + (precioConImpuesto - precio_descuento_lampara) + " de IIBB");
    }

    else{
        document.getElementById("txtIdprecioDescuento").value = precio_descuento_lampara;
        alert("El total a abonar es de $" + precio_descuento_lampara);
        }

 	
}
