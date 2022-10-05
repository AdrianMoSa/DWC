"use strict";
//Tras muchas horas de pensar me ha tocado mirar parte del código en internet porque sabía lo que queria hacer, pero no conseguia ponerlo en práctica.
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
sudokuIncorrecto[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto[1] = [4, 8, 9, 1, 2, 3, 7, 5, 6];
sudokuIncorrecto[2] = [7, 5, 7, 6, 8, 9, 1, 2, 3];
sudokuIncorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuIncorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuIncorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuIncorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuIncorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuIncorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];

function comprobarSudoku(sudoku) {
  for (var i = 0; i < 9; i++) {
  for (var j = 0; j < 9; j++) {
      for (var k = j + 1; k < 9; k++) {
      //Esta parte comprueba las columnas.
       if (sudoku[i][j] == sudoku[i][k]) {
        console.log(`Error el numero ${sudoku[i][j]} está repetido en las columnas `)
          return false;
      }
      //Esta parte comprueba las filas.
      if (sudoku[j][i] == sudoku[k][i]) {
          console.log(`Error el numero ${sudoku[j][i]} está repetido en las filas`)
        return false;
      }
      //Esta parte comprueba los cuadros.
      if (sudoku[Math.floor(i/3) * 3 + Math.floor(j/3)][i%3 * 3 + j%3] == sudoku[Math.floor(i/3) * 3 + Math.floor(k/3)][i%3 * 3 + k%3]) {
        console.log("Incorrecto hay un numero repetido en las celdas");
          return false;
      }
    }
  }
}

return console.log("El sudoku es correcto ");
}

comprobarSudoku(sudokuIncorrecto);
