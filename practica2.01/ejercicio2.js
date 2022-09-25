"use strict";
let juanP1=89;
let juanP2=120;
let juanP3=103;
let marcosP1=116;
let marcosP2=94;
let marcosP3=123;
let mariaP1=97;
let mariaP2=134;
let mariaP3=105
let mediaJuan=(juanP1+juanP2+juanP3)/3;
let mediaMarcos=(marcosP1+marcosP2+marcosP3)/3;
let mediaMaria=(mariaP1+mariaP2+mariaP3)/3;
if(mediaJuan>mediaMarcos&&mediaJuan>mediaMaria)
{
    console.log(`El ganador es Juan, con una media de ${mediaJuan}`);
}
else if (mediaJuan===mediaMarcos&&mediaMarcos===mediaMaria)
{
    console.log(`Han empatado con un total de ${mediaJuan}`);
}
else if(mediaMarcos>mediaJuan&&mediaMarcos>mediaMaria)
{
    console.log(`El ganador es Marcos, con una media de ${mediaMarcos}`);
}
else
{
    console.log(`La ganadora es Maria, con una media de ${mediaMaria}`);
}