let verdadero = true;
let edad = 16;

let arreglo = [1, 2, 3, 4, 5];

// operadores lógicos
// variables
// tipo de datos primitivos

function calculeEdad() {
  if (edad >= 18) {
    console.log("Es mayor de edad");
  } else {
    console.log("Es menor de edad");
  }
}

console.log(calculeEdad());

for (let index = 0; index < arreglo.length; index++) {
  const como = arreglo[index];
  console.log(como);
}
