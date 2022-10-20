"use strict";
var doc= window.document;

function generarTarea(){
    var tarea=doc.createElement("div");
    var texto=doc.getElementById("tareas").firstElementChild;
    tarea.classList.add('tarea');
    tarea.innerHTML=(`
    <p>{texto}</p>
    <p class="botones">
      <input type="button" value="Borrar" class="del" />
      <input type="button" value="Acabar" class="end" />
    </p>`);
    return tarea;
}
var anyadirTarea=doc.querySelector('.add')

anyadirTarea.addEventListener('click',() => {
   var destino=doc.getElementById("pendientes");
    destino.appendChild(generarTarea());
})


