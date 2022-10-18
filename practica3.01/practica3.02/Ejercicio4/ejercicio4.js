"use strict";

var imagenes = [
  "https://statics.memondo.com/p/99/ccs/2014/06/CC_2339293_f3c3f85cba454e99b69fe1efb15a0dab_meme_otros_abuelo_simpson_comunista_y_anti_comunista_thumb_fb.jpg?cb=9735674",
  "https://media.revistagq.com/photos/5ea2aa558368a10008af3324/master/w_1280,h_720,c_limit/abe-simpson.jpg",
  "https://i.ytimg.com/vi/43GM1XcJ-Zc/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLy1QKnADLP2nVwXCIrLWEcYfBoakFpcyMiw&usqp=CAU",
];

let imagen = document.getElementById("img");
let i = 0;
//Recordar que en un intervalo no utilizar el for.
let id = setInterval(() => {
  imagen.setAttribute("src", imagenes[i]);
  i++;
  if (i == 4) {
    i = 0;
  }
}, 2000);
