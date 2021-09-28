# Explicaciones

## Variables

las variables son apodos que podemos utilizar para guardar información, como números, palabras u operaciones. La primera vez que usamos el "apodo" debemos decirle a la computadora a que le estamos poniendo ese apodo, por ejemplo le puedo poner el apodo `frase` a el siguiente texto: "hola". también le puedo poner un apodo a un número o al resultado de una operación. Una vez que la computadora sabe a que le puse el apodo, puedo usar ese apodo la próxima vez que necesite la frase, la operación o el número sin tener que escribirlo otra vez.

## Strings

Las strings son un tipo de información, por lo general letras. También pueden ser números, pero cuando los números son strings no se puede hacer operaciones matemáticas con ellos. Para indicarle a la computadora que la información que le estamos dando es un string es necesario encerrarla entre comillas: 'perro' es un string, pero la palabra perro sin comillas sería una variable (o un apodo), el número 5 es el número normal. Se puede hacer algunas operaciones con strings, el mas sencillo es una "suma", si le pedimos a la computadora que sume dos strings lo que hará será ponerlo uno después de otro, por ejemplo 'perro' + 'gato' va a ser igual al string 'perrogato'. De la misma forma si hacemos '5' + '5' el resultado será '55'.

## Funciones

Cuando queremos ponerle un "apodo" a una serie de instrucciones para computadora, creamos una función. Como con las variables, debemos indicarle a la computadora el apodo que queremos usar, después la serie de instrucciones que queremos que haga, y por último los argumentos.

Los argumentos son datos o informaciones que la computadora necesitará para llevar a cabo la serie de instrucciones en la función.

Por ejemplo, voy a crear una función que se va a llamar "Saludar" en esa función va a haber dos instrucciones:
   1. Saludar a la persona
   2. desearle un buen día

Ahora el problema es que la computadora no tiene forma de saber como se llama la persona, y para eso se usa el argumento, en este caso el argumento sería el nombre de la persona, entonces: el apodo (o nombre de la función) sería "Saludar", las instrucciones serían, saludar a la persona y desearle un buen día; y el argumento será el nombre de la persona.

Ahora que la computadora ya sabe esto, le puedo pedir que use la función "Saludar" con el argumento "Juan" y la computadora saludará a Juan y le deseará un buen día.
Dentro de las funciones hay una órden especial que se llama return, cuando dentro de una función una instrucción le pide a la computadora un return, la computadora nos informará cual es el resultado de la instrucción que comienza con la palabra `return` y detendrá la función, sin importar que haya mas instrucciones después.

## Declaraciones `if`

Un tipo de instrucción que le podemos dar a la computadora se llama if, que básicamente se traduce a: "si esta condición es verdadera, entonces haz esta instrucción". 

Para pedirle a la computadora que haga una instrucción `if` es necesario indicarle 3 cosas:
   1. la palabra `if`
   2. la condición
   3. la instrucción que queremos que haga

Como ejemplo vamos a crear una función en la que la computadora me diga si alguien es viejo.

El nombre de la función será `ejemplo`, el argumento de la función será `edad`, y la instrucción será un `if` en donde la computadora me diga que alguien es viejo si tiene mas de 25 años (la condición será si `edad` > 25).

Le pido a la computadora que haga esta función y como argumento le doy una edad de 26. la computadora me dirá que es viejo, si le doy un edad de 25 o menos la computadora no hará nada puesto que no le indiqué que hacer si la condición no se cumple.

## Valores booleanos

Junto con los `strings` y los valores numéricos, la computadora también puede entender valores de verdadero o falso estos valores se conocen como booleanos, y sólamente hay dos: `true` y `false`. Un lugar en que la computadora utiliza este tipo de valores es en la condición de la declaración `if`: el resultado de esa condición siempre va a tomar un valor booleano; en el ejemplo anterior, la condición era que la edad fuera mayor a 25, y el resultado siempre será verdadero o falso. Si la edad que le doy es 25, la operación que la computadora vería sería ¿es 25 mayor que 25? y el resultado será `false`, si le doy una edad de 27 la condición que la computadora vería sería: ¿es 27 mayor que 25? y la respuesta sería `true`. Las condiciones que se usan para la instrucción `if` solo pueden ser ciertas o falsas.