"use strict";
var doc= window.document;

function generarTarea(){
    var tarea=doc.createElement("div");
    var texto=doc.getElementById("tareas").firstElementChild;
    tarea.classList.add('tarea');
    tarea.innerHTML=(`
    <p>${texto.value}</p>
    <p class="botones">
      <input type="button" value="Borrar" class="del" />
      <input type="button" value="Acabar" class="end" />
    </p>`);
    
   
    return tarea;
}


var anyadirTarea=doc.querySelector('.add')

anyadirTarea.addEventListener('click',() => {
   var destino=doc.getElementById("pendientes");
   var texto=doc.getElementById("tareas").firstElementChild;
   if(texto.value==""){
    texto.value="Escriba algo señor";
  }
  else{
    destino.appendChild(generarTarea());
    
  }
    texto.value="";
    texto.focus();
})
function deletearTarea(a){
  console.log(a)
// var almacen=doc.querySelector('.del')
a.parentElement.parentElement.remove();
// almacen.remove();

}


var borrarTarea=doc.querySelector('.del')
borrarTarea.addEventListener('click',()=>{
  deletearTarea(this);
});


