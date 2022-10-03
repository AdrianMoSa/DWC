"use strict";
//Función para ver que números son palíndromos y primos entre el 1 y el 1000.
function palincapi() {
  var primosyPalindromos = [];
  function esPalindromo(n)
  {
      var resto,final = 0;
      var numero = n;
      while(numero>0)
      {
          resto = numero%10;
          numero = parseInt(numero/10);
          final = final*10+resto;
      }
      if(final==n)
      {
          return true;
      }
      else
      {
          return false;
      }
  }
  function esPrimo(n) {
    var cont = 0;
    for (var x = 2; x <= n; x++) {
      if (n % x == 0) {
        cont++;
      }
    }
    if (cont < 2) {
      return true;
    } else {
      return false;
    }
  }
  for (var i = 2; i < 1000; i++) {
    if (esPrimo(i) && esPalindromo(i)) {
      primosyPalindromos.push(i);
    }
  }
  for (var i = 0; i < primosyPalindromos.length; i++) {
    console.log(primosyPalindromos[i]);
  }

}
palincapi();
