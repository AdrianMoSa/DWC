"use strict";
//Función que sirve para mostrar una fecha formateada pasados 3 segundos.
const id=setTimeout(mostrarFecha,3000);

function mostrarFecha(){
    var date=new Date;
    var mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    console.log(`Hoy estamos a ${date.getDate()} de ${mes[date.getMonth()]} del año ${date.getFullYear()} y son las ${date.getHours()} y ${date.getMinutes()}`);
  
   
}
