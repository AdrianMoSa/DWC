"use strict";

let masaJuan=70;
let alturaJuan=1.70;
let alturaMarcos=2.00;
let masaMarcos=150;
let imcJuan=masaJuan/(alturaJuan*alturaJuan);
let imcMarcos=masaMarcos/(alturaMarcos*alturaMarcos);
let Boolean, imcMayor=false;
if(imcMarcos>imcJuan){
    imcMayor=true;
}
console.log(`Marcos tiene un IMC mayor que Juan? ${imcMayor}`);
