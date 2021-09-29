# Explicaciones
---
## `for`

Hay veces que es útil pedirle a una computadora que repita una serie de instrucciones hasta que se cumpla una condición (el mismo tipo de condiciones que usamos con la instrucción `if`). Por ejemplo si quiero que la computadora me muestre los números del 1 al 10, puedo escribir 1 instrucción por cada número hasta el 10; la otra forma de hacerlo sería utilizando `for`:

* pongo la palabra `for` para indicar a la computadora que quiero que repita las instrucciones a continuación. También le indico a la computadora que creé una variable de nombre i y que le asigne un valor de 0 (esta variable la vamos a explicar después)
* indico la condición, recordando que una vez que esta condición se cumpla, la computadora dejara de repetir las instrucciones siguientes. Para nuestro ejemplo la condición sera que la variable i sea mayor a 10 (i > 10) 
* indico las instrucciones, en el caso de nuestro ejemplo de contar del uno al diez, le voy a pedir a la computadora que:
    1. que al numero que haya en i le sume 1 y que guarde el resultado en i.
    2. que ponga en la pantalla el valor de i.

Cuando le pido a la computadora que realice este `for`, la computadora hará lo siguiente:
1. creará la variable i, verá si se cumple que i sea mayor a 10, como i vale zero continuará a las instrucciones que le dimos.
2. la primera instrucción que le dimos es que le sume 1 a i (0 + 1 = 1), ahora i vale 1; la segunda instrucción es que ponga en pantalla el valor de i (pone en pantalla el número 1).
3. Ahora la computadora regresara al principio y volverá a revisar si la condición ya se cumple, ahora i vale 1, la condición todavía no se cumple, como no se cumple, la computadora va a realizar las instrucción 1 y 2 otra vez.
4. La computadora realiza la instrucción 1 y le suma 1 a i (1 + 1 = 2), y guarda el resultado en i nuevamente: i ahora vale 2. La instrucción 2 nuevamente es poner en la pantalla el valor de i, esta vez la computadora pondrá el número 2 en la pantalla.
5. la computadora regresa a revisar si la condición se cumple, como te habrás imaginado la computadora va a repetir las instrucciones 1 y 2 varias veces, y terminará cuando al revisar la condición la variable i tenga un valor de 11, como la condición ya se cumple (cuando i vale 11, i ya es mayor a 10) la computadora ya no hará otra ronda de instrucciones 1 y 2.

## `&&`, `||`, `!`

La condición que le pedimos a la computadora que revise cuando le pedimos que haga un `for` o un `if` no tiene que ser una sola, también le podemos pedir que verifique 2 condiciones al mismo tiempo. Si queremos que la computadora sólo continue realizando las instrucciones dentro de un `if` or un `for` si las dos conduciones se cumplen utilizaremos `&&`; si queremos que la computadora continue realizando instrucciones cuando alguna de dos condiciones se cumplan, utilizaremos `||` entre las condiciones. 

Por último, también podemos pedirle a la computadora que nos de el valor opuesto de un booleano, recordando que todas las condiciones que usamos en la instrucción `if` y `for` solo pueden ser ciertas o falsas. si utilizamos el símbolo `!` la computadora cambiará un cierto por un falso y viseversa. También cambiará un igual por diferente: a === b significa "a es igual a b" para la computadora en cambio a !== b significa "a NO es igual a b". 