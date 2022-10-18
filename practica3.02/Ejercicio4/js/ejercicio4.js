"use strict";

var imagenes = [
  "https://s1.eestatic.com/2022/08/09/enclave-ods/historias/694190820_226335504_1024x576.jpg",
  "https://t1.ea.ltmcdn.com/es/posts/7/1/5/los_35_animales_mas_tiernos_del_mundo_24517_orig.jpg",
  "https://images.hola.com/imagenes/mascotas/20220309205960/animales-mas-perezosos-dn/1-61-87/animales-dormilones-razones-para-dormir-casi-toda-su-vida-t.jpg",
  "https://certifiedhumanelatino.org/wp-content/uploads/2019/02/CERTIFIED-HUMANE_Post-blog.jpg",
];

let imagen = document.getElementById("img");
let i = 0;

let id = setInterval(() => {
  imagen.setAttribute("src", imagenes[i]);
  i++;
  if (i == 4) {
    i = 0;
  }
}, 2000);
