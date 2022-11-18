"use strict";

function mostrar(objeto, donde) {
  let cadena = "";
  objeto.map((v, i, a) => {
    cadena += `<p>El planeta ${v.name} tiene un periodo orbital de ${v.orbital_period} días terrestres.</p>`;
  });
  donde.innerHTML = cadena;
}
function mostrarPelicula(objeto, donde) {
    let cadena = "";
    objeto.map((v, i, a) => {
      cadena += `<li> ${v.title} episodio ${v.episode_id}.</li>`;
    });
    donde.innerHTML = cadena;
  }
  
  function mostrarPeli(objeto, donde) {
    let cadena = "";
    objeto.map((v) => {
      cadena += `<h1> ${v.title} </h1>`;
    });
    donde.innerHTML = cadena;
  }
  function mostrarDatos(objeto, donde) {
    let cadena = "";
    objeto.map((v) => {
      cadena += `<p> Dirigida por: ${v.director}<br/> Producida por: ${v.producer}<br/> En el año: ${v.release_date}<br/> Sinopsis: ${v.opening_crawl}  </p>`;
    });
    donde.innerHTML = cadena;
  }
 

export { mostrarPelicula,mostrarPeli,mostrarDatos};