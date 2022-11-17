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
  

export { mostrarPelicula };