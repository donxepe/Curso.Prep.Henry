# Explicaciones

## Objetos y Propiedades

Los objectos son parecidos a los arreglos en que los dos nos dejan guardar colecciones de cosas: en un objeto podemos guardar elementos de forma clave:valor (o propiedad:valor). por ejemplo un objeto `Pizza` puede tener 3 propiedades:

const pizza = {
    precio: 15
    champiñones: true
    tamaño: 'familiar'
}

Como puedes ver al igual que en un arreglo podemos guardar `strings`, `boooleanos` y números.

## Métodos

A diferencia de los arreglos, en los objetos también podemos guardar funciones, a las funciones guardadas en objetos las llamamos `métodos`. 

## Bucle `for... in`

Continuándo con las diferencias, si queremos hacer un bucle para recorrer las propiedades de un objeto, no podemos usar un for normal, ya que los propiedades de un objeto no tienen un índice numérico. Lo que usamos es un bucle `for... in`. también tenemos que definir una variable al usar este tipo de for (de igual manera como usamos var i = 0):

for (let clave in objeto) {
    \\ otras instrucciones aquí
}

En donde `clave` es el nombre de la variable que definimos para el for y `objeto` es el nombre del objeto en el cual queremos iterar.

## Notación de corchetes

Como mencioné antes, no usamos índices numéricos para acceder a los contenidos de un objeto, sino las nombres o claves de las propiedades, regresando al ejemplo del objeto pizza:

const pizza = {
    precio: 15
    champiñones: true
    tamaño: 'familiar'
}

si queremos que la computadora nos diga lo que está guardado en la propiedad con el nombre `tamaño` podemos hacerlo de dos formas:

* pizza.tamaño 
* pizza['tamaño']

El resultado para ambas formas será el string "familiar". La ventaja que nos dá utilizar el método de los corchetes, es que podemos usar variables por ejemplo:

\\ Guardamos el string tamaño en la variable propiedad
var propiedad = "tamaño"

\\ y luego le pedimos a la computadora que nos devuelva la propiedad del objeto pizza que coincida con lo que está guardado en la variable propiedad

pizza[propiedad]

y como propiedad es igual a "tamaño", el resultado volverá a ser el string "familiar"