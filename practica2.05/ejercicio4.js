"use strict";

const id=setTimeout(mostrarFecha,3000);

function mostrarFecha(){
    var date=new Date;
    console.log(`Hoy estamos a ${date.getDate()} del mes ${date.getMonth()+1} del año ${date.getFullYear()}`);
   /* var mes=Date.prototype.getMonth();
    var diaMes=Date.prototype.getDate();
    var dia=Date.prototype.getDay();
    var hora=Date.prototype.getHours();
    var minutos=Date.prototype.getMinutes();
    */
   
}
