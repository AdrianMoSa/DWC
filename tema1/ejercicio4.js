"use strict";
function facturas (nombreDeProducto="Producto generico",precio=100,impuesto=21){
    var precioTotal=(precio*impuesto/100)+precio;
    
    if(isNaN(precio)){
        console.log("error: Introduce una cifra en el precio");
    }
    else if(isNaN(impuesto)){
        console.log("Error: Introduce una cifra en el impuesto ");
    }
    else{
       return console.log(`El producto: ${nombreDeProducto}, tiene un precio total de: ${precioTotal} `)
    }
    
}
facturas();