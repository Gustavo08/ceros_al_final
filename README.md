# Función para enviar todos los ceros de un array al final.

## Datos de ejemplo
* Lista de datos [1, 2, 0, 0, 4, 0, 5] = [1, 2, 4, 5, 0, 0, 0]

```js
    function zeroesToEnd(arr) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === 0) {
                arr.splice(i, 1);
                arr.push(0);
            }
        }
        return arr;    
    }
```
