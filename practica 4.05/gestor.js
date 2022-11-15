"use strict";

var doc = window.document;
var acabadas=document.getElementById("acabadas");
var pendientes=document.getElementById("pendientes");

function generarTarea() {
  var tarea = doc.createElement("div");
  var texto = doc.getElementById("tareas").firstElementChild;
  tarea.classList.add("tarea");
  tarea.innerHTML = `
    <p>${texto.value}</p>
    <p class="botones">
      <input type="button" onClick="deletearTarea(this);" value="Borrar" class="del" />
      <input type="button" onClick="acabarTarea(this);" value="Acabar" class="end" />
    </p>`;
  var destino = doc.getElementById("pendientes");
  destino.appendChild(tarea);
  texto.value = "";
  for (var i = 0; i < arr.length; i++) {
    arr[i].setAttribute("draggable", true);
  }
}

var arbolAnyadir = doc.getElementById("tareas");
var anyadirTarea = arbolAnyadir.querySelector(".add");

anyadirTarea.addEventListener("click", () => {
  var texto = doc.getElementById("tareas").firstElementChild;
  if (texto.value == "") {
    texto.value = "Escriba algo hipoglúcido/a";
  } else {
    generarTarea();
  }

  texto.focus();
});
//Le entra un botón como parametro al no tener una id el div, hay que guardar la posición del botón en una variable para poder subir hasta el div.
function deletearTarea(boton) {
  var divTarea = boton.parentElement.parentElement;
  divTarea.remove();
}
/*Hacemos un foreach porque al haber elementos previos en html necesitamos recorrer todos los botones, sino nos valdría solo con el onclick del botón con this(linea 11).
A la función deletearTarea hay que pasarle un botón.
Esto solo se hace porque hay elementos previos en html, sino solo se harían las lineas(35-37).
*/
var arbolBorrar = doc.getElementById("pendientes");
var borrarTareas = arbolBorrar.querySelectorAll(".del");
borrarTareas.forEach((borrarTarea) =>
  borrarTarea.addEventListener("click", () => {
    deletearTarea(borrarTarea);
  })
);

// Aquí en las últimas 3 líneas desarrollamos la función del botón.
function acabarTarea(boton) {
  var divTarea = boton.parentElement.parentElement;
  var tarea = doc.createElement("div");
  var texto = divTarea.querySelector("p").innerHTML;
  tarea.classList.add("acabada");
  tarea.innerHTML = `
  <p>${texto}</p>
  <p class="botones">
    <input type="button" onCLick="archivarTarea(this)" value="Archivar" class="esc" />
    <input type="button" onClick="volverTarea(this)" value="Volver" class="end" />
  </p>`;
  var destino = doc.getElementById("acabadas");
  destino.appendChild(tarea);
  deletearTarea(boton);
  for (var i = 0; i < arr.length; i++) {
    arr[i].setAttribute("draggable", true);
  }
}

var arbolAcabar = doc.getElementById("pendientes");

var acabarTareas = arbolAcabar.querySelectorAll(".end");
acabarTareas.forEach((acabar) =>
  acabar.addEventListener("click", () => {
    acabarTarea(acabar);
  })
);

function volverTarea(boton) {
  var divTarea = boton.parentElement.parentElement;
  var tarea = doc.createElement("div");
  var texto = divTarea.querySelector("p").innerHTML;
  tarea.classList.add("tarea");
  tarea.innerHTML = `
  <p>${texto}</p>
  <p class="botones">
  <input type="button" onClick="deletearTarea(this);" value="Borrar" class="del" />
  <input type="button" onClick="acabarTarea(this);" value="Acabar" class="end" />
  </p>`;
  var destino = doc.getElementById("pendientes");
  destino.appendChild(tarea);
  deletearTarea(boton);
  for (var i = 0; i < arr.length; i++) {
    arr[i].setAttribute("draggable", true);
  }
}
var arbolVolver = doc.getElementById("acabadas");
var volver = arbolVolver.querySelector(".end");

volver.addEventListener("click", () => {
  volverTarea(volver);
});

function archivarTarea(boton) {
  var divTarea = boton.parentElement.parentElement;
  divTarea.classList.remove("acabada");
  divTarea.classList.add("invisible");
}

var arbolArchivar = doc.getElementById("acabadas");
var archivar = arbolArchivar.querySelector(".esc");

volver.addEventListener("click", () => {
  archivarTarea();
});

function mostrarTareas() {
  var invisibles = doc.querySelectorAll(".invisible");
  invisibles.forEach((invisible) => {
    invisible.classList.remove("invisible");
    invisible.classList.add("acabada");
  });
}

var mostrar = doc.querySelector(".sho");
mostrar.addEventListener("click", () => {
  mostrarTareas();
});
//Aqui empieza la práctica
var arr = document.getElementsByClassName("tarea");


for (var i = 0; i < arr.length; i++) {
  arr[i].setAttribute("draggable", true);
}
var elementoArrastrado;

document.addEventListener(
  "dragstart",
  function (evento) {
    elementoArrastrado = evento.target;
  },
  false
);
document.addEventListener(
  "dragover",
  //poner siempre porque si no vuelve a su sitio el target.
  function (evento) {
    evento.preventDefault();
  },
  false
);

document.addEventListener(
  "drop",
  //poner siempre porque si no vuelve a su sitio el target.
  function (evento) {
    evento.preventDefault();

    if (evento.target.id == "acabadas") {
    
      elementoArrastrado.classList = "acabada";
      var texto = elementoArrastrado.innerText;
      elementoArrastrado.innerHTML = `
  <p>${texto}</p>
  <p class="botones">
    <input type="button" onCLick="archivarTarea(this)" value="Archivar" class="esc" />
    <input type="button" onClick="volverTarea(this)" value="Volver" class="end" />
  </p>`;
      acabadas.style.opacity="1";
      evento.target.appendChild(
        elementoArrastrado
        
      );
     
    } else if (evento.target.id == "pendientes") {
    
      elementoArrastrado.classList = "tarea";
      var texto = elementoArrastrado.innerText;
      elementoArrastrado.innerHTML = `
  <p>${texto}</p>
  <p class="botones">
  <input type="button" onClick="deletearTarea(this);" value="Borrar" class="del" />
  <input type="button" onClick="acabarTarea(this);" value="Acabar" class="end" />
  </p>`;
      pendientes.style.opacity="1";
      evento.target.appendChild(
        elementoArrastrado
        
      );
    }
  },
  false
);
acabadas.addEventListener("dragenter", (evento) => {
  evento.preventDefault();
  evento.target.style.opacity = ".5";
});

acabadas.addEventListener("dragleave", (evento) => {
  evento.preventDefault();
  evento.target.style.opacity = "1";
});

pendientes.addEventListener("dragenter", (evento) => {
  evento.preventDefault();
  evento.target.style.opacity = ".5";
});

pendientes.addEventListener("dragleave", (evento) => {
  evento.preventDefault();
  evento.target.style.opacity = "1";
});


