"use strict";

const id=setTimeout(mostrarFecha,3000);

function mostrarFecha(){
    var date=new Date;
    var mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    console.log(`Hoy estamos a ${date.getDate()} de ${mes[date.getMonth()]} del año ${date.getFullYear()}`);
   /* var mes=Date.prototype.getMonth();
    var diaMes=Date.prototype.getDate();
    var dia=Date.prototype.getDay();
    var hora=Date.prototype.getHours();
    var minutos=Date.prototype.getMinutes();
    */
   
}
