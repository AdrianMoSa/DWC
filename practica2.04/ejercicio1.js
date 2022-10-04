"use strict";
//Ejemplo de sudoku correcto
var sudokuCorrecto = [];
sudokuCorrecto[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuCorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuCorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuCorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuCorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuCorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuCorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuCorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuCorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];
//Ejemplo de sudoku incorrecto
var sudokuIncorrecto = [];
sudokuIncorrecto[0] = [2, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuIncorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuIncorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuIncorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuIncorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuIncorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuIncorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuIncorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];

function comprobarSudoku(sudoku) {
  var arrayComprobar=[]
  var contador=0;
  var correcto = true;
  var numeroComprobar;
  for (var i = 0; i < sudoku.length; i++) {
    arrayComprobar[i]=sudoku[i][0];    
    //Bucle que recorre el array que está en la posición i
    for (var j = 0; j < sudoku[i].length; j++) {
               
   
      
    }
  }
  for(var i=0;i<arrayComprobar.length;i++){
    console.log(arrayComprobar[i]);
    numeroComprobar=arrayComprobar[i]
    for(var j=0;i<arrayComprobar.length;j++){
     
      if(numeroComprobar===arrayComprobar[i]){
        contador++;
  
      }
      if(contador>2){
        return console.log("el array esta mal");
      }
    }
    
  }
  return(console.log("Todo ok Jose Luis"));
}

comprobarSudoku(sudokuCorrecto);
