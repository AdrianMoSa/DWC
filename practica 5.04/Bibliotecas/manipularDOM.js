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
          cadena += `<li value=${v.episode_id} title="${v.url}"> ${v.title} episodio ${v.episode_id}.</li>`;
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
      function mostrarElenco(elenco, donde) {
        let cadena = "";
        elenco.map((v, i, a) => {
          cadena += `<p class="elenco" title="${v.value.url}"> ${v.value.name}</p>`;
        });
        donde.innerHTML = cadena;
      }

      function mostrarActores(objeto,donde){
        let cadena = "";
       
          
          
          cadena += `<p> Gender: ${objeto.gender}<br/> Altura: ${objeto.height}<br/> peso: ${objeto.mass}<br/> Color de pelo: ${objeto.hair_color}<br/> Color de piel: ${objeto.skin_color}<br/></p>`;
        donde.innerHTML = cadena;
    }
    function mostrarVehiculos(vehiculo, donde) {
      let cadena = "";
      if(vehiculo.length===0){
        cadena+=`<p> No hay vehiculos para este personaje</p>`
      }else{
      vehiculo.map((v, i, a) => {
        cadena += `<p class="vehiculos" title="${v.value.url}"> ${v.value.name}</p>`;
      })};
      donde.innerHTML = cadena;
    }

    function mostrarDatosVehiculo(objeto,donde){
      let cadena = "";
     
        
        
        cadena += `<p> Nombre: ${objeto.name}<br/> Modelo: ${objeto.model}<br/> Longitud: ${objeto.length}<br/></p>`;
      donde.innerHTML = cadena;
  }


    function mostrarNaves(naves, donde) {
      let cadena = "";
      if(naves.length===0){
        cadena+=`<p> No hay naves para este personaje</p>`
      }else{
      naves.map((v, i, a) => {
        cadena += `<p class="naves" title="${v.value.url}"> ${v.value.name}</p>`;

      })};
      donde.innerHTML = cadena;
    }
    function mostrarDatosNave(objeto,donde){
      let cadena = "";
       
        cadena += `<p> Nombre: ${objeto.name}<br/> Modelo: ${objeto.model}<br/> Velocidad máxima: ${objeto.max_atmosphering_speed}<br/></p>`;
      donde.innerHTML = cadena;}
    
    export{mostrar,mostrarPelicula,mostrarTitulo,mostrarDatos,mostrarElenco,mostrarActores,mostrarVehiculos,mostrarNaves,mostrarDatosVehiculo,mostrarDatosNave};