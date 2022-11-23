"use strict";

function mostrarPelicula(objeto, donde) {
    let cadena = "";
    objeto.map((v, i, a) => {
      cadena += `<li value=${v.episode_id}> ${v.title} episodio ${v.episode_id}.</li>`;
    });
    donde.innerHTML = cadena;
  }
  
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

  function mostrarActores(objeto,donde,cual){
    let cadena = "";
    objeto.map((v) => {
      console.log(objeto);
      if(cual===v.name){
      cadena += `<p> Altura: ${v.height}<br/> peso: ${v.mass}<br/> Color de pelo: ${v.hair_color}<br/> Color de piel: ${v.skin_color}<br/></p>`;
  }});
    donde.innerHTML = cadena;
  }

  function guardarUrlActores(objeto,cual,array){
    objeto.map((v) => {   
      if(cual===v.episode_id){
       
      for(var i=0;i<10;i++){
        array[i]=v.characters[i];
        
      }
  }});
    
  
  }
  function imprimirActores(objeto, donde) {
    let cadena = "";
    
    
      cadena += `<li>${objeto.name}</li>`;
  
    donde.innerHTML = cadena;
  }
  // function imprimirActores(objeto, donde) {
  //   let cadena = "";
  //   console.log(typeof objeto);
  //   for (let nombre in objeto){
  //     console.log(objeto[nombre]);
  //   }
  //   donde.innerHTML = cadena;
  // }

  function imprimirEstudiantes(objeto, donde) {
    let cadena = "";
    objeto.map((v) => {
      cadena += `<h2>${v.name}: ${v.dateOfBirth}</h2><br/><h3> interpretado por: ${v.actor}</h3><br/><img src="${v.image}" alt="No existe la foto"></img>`;
  });
    donde.innerHTML = cadena;
  }
  function imprimirHechizos(objeto,donde){
    let cadena= "";
    objeto.map((v)=>{
      cadena+=`<h2>${v.name}</h2><br/><p>${v.description}</p>`
    });
    donde.innerHTML= cadena;
  }

export { mostrarPelicula,mostrarTitulo,mostrarDatos,guardarUrlActores,imprimirActores,mostrarActores,imprimirEstudiantes,imprimirHechizos};