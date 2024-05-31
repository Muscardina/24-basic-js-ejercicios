//1: Acceder a elementos de un array:

let colors = ["rojo", "verde", "azul", "amarillo"];
    console.log(colors[2]);


//2: Último Elemento del Array: Imprime el último elemento del array colors sin usar su índice explícitamente.

    console.log(colors[colors.length-1])

//3: Acceder a Elementos en una Matriz:

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
    console.log(matrix[1][2]);

//4: Cambia el elemento en la primera fila y segunda columna a 20. Imprime la matriz modificada.

matrix[0][1] = 20
    console.log(matrix)

//5: Usa un bucle for para imprimir todos los elementos del array colors

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//6: Usa un bucle for anidado para imprimir todos los elementos de la matriz matrix.

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

//7: Sumar Todos los Elementos de una Matriz: Escribe una función que reciba una matriz y devuelva la suma de todos sus elementos.

function sumMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}

    console.log(sumMatrix(matrix));

//8: Escribe una función que reciba una matriz y devuelva su transpuesta (intercambiar filas por columnas). Quealguienmemateporpiedad

function transpose(matrix) {
    let transposed = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transposed[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }
    return transposed;
}

let transposedMatrix = transpose(matrix);
    console.log(transposedMatrix);

//9: Escribe una función que imprima los elementos en la diagonal principal de una matriz cuadrada. Un poco menos peor.

function printDiagonal(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][i]);
    }
}
    printDiagonal(matrix)

//10: Escribe una función que rote una matriz cuadrada 90 grados en el sentido de las agujas del reloj. SU-PUTA-MADRE

function rotateMatrix(matrix) {
    let n = matrix.length;
    let rotated = [];
    for (let i = 0; i < n; i++) {
        rotated[i] = [];
        for (let j = 0; j < n; j++) {
            rotated[i][j] = matrix[n - j - 1][i];
        }
    }
    return rotated;
}

let rotatedMatrix = rotateMatrix(matrix);
    console.log(rotatedMatrix);

//11: Crea un array llamado fruits que contenga las frutas "manzana", "banana" y "naranja". Imprime el primer y el último elemento del array.

let fruits = ["manzana", "banana", "naranja"]
console.log (fruits[0])
    console.log (fruits[2])

//12: Añade "uva" al final del array fruits. Cambia el segundo elemento del array a "kiwi". Elimina el primer elemento del array.

fruits.push("uva");
fruits[1] = "kiwi";
fruits.shift();
    console.log(fruits); 

//13: Crea un array llamado numbers con los números del 1 al 5. Usa el método map para crear un nuevo array que contenga el cuadrado de cada número. Usa el método filter para crear un nuevo array que contenga solo los números mayores que 2.

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((num) => num * num);
let greaterThanTwo = numbers.filter((num) => num > 2);
    console.log(squares); // [1, 4, 9, 16, 25]
    console.log(greaterThanTwo); // [3, 4, 5]

//14: Usa un bucle for para imprimir cada elemento del array fruits en mayúsculas.

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
  }

//15: Usa el método reduce para calcular la suma de todos los elementos del array numbers.

let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log(sum);

//16: Crea un nuevo array combinando fruits y numbers. Ordena el nuevo array en orden alfabético o numérico según corresponda.

let combined = fruits.concat(numbers);
combined.sort(); 
    console.log(combined);

//17: Eliminar Duplicados. Dado un array randomNumbers con números aleatorios, crea una función para eliminar los duplicados.

let randomNumbers = [1, 2, 3, 3, 4, 5, 5, 6];
let uniqueNumbers = [...new Set(randomNumbers)];
    console.log(uniqueNumbers); // [1, 2, 3, 4, 5, 6]

//18: Encontrar Elementos Comunes. Dado dos arrays array1 y array2, encuentra los elementos comunes entre ellos.

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let commonElements = array1.filter((value) => array2.includes(value));
    console.log(commonElements); 

//19: Rotar un Array. Escribe una función para rotar un array hacia la derecha n veces.

function rotateArray(arr, n) {
    n = n % arr.length;
    return arr.slice(-n).concat(arr.slice(0, -n));
  }
  let rotated = rotateArray([1, 2, 3, 4, 5], 2);
    console.log(rotated)

  //20: Buscar el Elemento Mayor. Escribe una función que encuentre el elemento mayor en un array de números.

  function findMax(arr) {
    return Math.max(...arr);
  }
  let max = findMax([1, 2, 3, 4, 5]);
    console.log(max)


