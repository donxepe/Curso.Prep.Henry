// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var arr = []
  for (key in objeto){
    arr.push([key, objeto[key]])
  }
  return arr
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var conteo = {}

  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (!conteo.hasOwnProperty(element)) {
      conteo[element] = string.split(element).length -1
    }
  }

  return conteo
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  var lower = []
  var upper = []

  for (let i = 0; i < s.length; i++) {
    const letra = s[i];
    if (letra === letra.toLowerCase()){
      lower.push(letra)
    } else {
      upper.push(letra)
    }
  }
  
  return upper.join('') + lower.join('')

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var reflection = []
  var palabra = []
  var words = str.split(' ')

  for (let i = 0; i < words.length; i++) {
    const word= words[i];
    for (let j = word.length; j >= 0; j--) {
      const letra = word[j];
      palabra.push(letra)
    }
    reflection.push(palabra.join(''))
    palabra = []
  }

  return reflection.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var cadena = numero.toString()
  var reverseCadena = []

  for (let i = cadena.length; i >= 0; i--) {
    const num = cadena[i];
    reverseCadena.push(num)
  }

  if (reverseCadena.join('') === cadena) {
    return "Es capicua"
  } 

  return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var retorno = []
  var noletra = 'abc'

  for (let i = 0; i < cadena.length; i++) {
    const letra = cadena[i];
    if (noletra.search(letra) == -1 ){
    retorno.push(letra)
    } 
  }

  return retorno.join('')

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  var oredenado = []
  var pivot = arr[0]

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if (pivot.length > )
  }

  return ordenado


}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

