function zeroesToEnd(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === 0) {
			arr.splice(i, 1);
			arr.push(0);
		}
	}
	return arr;

    /*
        Recorremos los elementos y cuando el elemento sea igual a 0
        se elimina (de acuerdo a su posición) 
        y se agrega al final del array.
    */
}

let example1 = [1, 2, 0, 0, 4, 0, 5];
let example2 = [0, 0, 2, 0, 5];
let response = zeroesToEnd(example1);

console.log("==== response =====");
console.log(response);