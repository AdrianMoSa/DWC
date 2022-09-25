"use strict";
var ejemplo={
    valido: true,
    telefono: 12345,
    familiares: ["Pepe,Paco"],
    calle: "falsa 1,2,3",
};
// typeof devuelve un string.
function leer (objeto){
    
    for(var partes in objeto){
        console.log(typeof(objeto[partes]));
       if(typeof(objeto[partes])=="boolean"){
        console.log(`El boolean es: ${objeto[partes]}`);
       }
       if(typeof(objeto[partes])=="number"){
        console.log(`Los number son: ${objeto[partes]}`);
       }
       if(typeof(objeto[partes])=="string"){
        console.log(`El string es: ${objeto[partes]}`);
       }
       if(typeof(objeto[partes])=="object"){
        console.log(`Los objetos son: ${objeto[partes]}`);
       }
       if(typeof(objeto[partes])=="undefined"){
        console.log(`Tiene objetos indefinidos: ${objeto[partes]}`);
       }
    }
}
leer(ejemplo);