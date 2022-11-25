"use strict";

function mostrar(peliculas, donde) {
    let cadena = "";
    peliculas.map((v, i, a) => {
      cadena += `<p class="pelicula" title="${v.url}"> ${v.title} </p>`;
    });
    donde.innerHTML = cadena;}

    function mostrarPelicula(objeto, donde) {
        let cadena = "";
        objeto.map((v, i, a) => {
          cadena += `<li value=${v.episode_id}> ${v.title} episodio ${v.episode_id}.</li>`;
        });
        donde.innerHTML = cadena;}

    function mostrarTitulo(objeto, donde,cual) {
        let cadena = "";
        objeto.map((v) => {
          if(cual===v.episode_id){
          cadena += `<h1> ${v.title} </h1>`;
      }});
        donde.innerHTML = cadena;
      }
      function mostrarDatos(objeto, donde,cual) {
        let cadena = "";
        objeto.map((v) => {
          if(cual===v.episode_id){
          cadena += `<p> Dirigida por: ${v.director}<br/> Producida por: ${v.producer}<br/> Fecha: ${v.release_date}<br/> Sinopsis: ${v.opening_crawl}<br/></p>`;
      }});
        donde.innerHTML = cadena;
      }

    export{mostrar,mostrarPelicula,mostrarTitulo,mostrarDatos};