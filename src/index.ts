let dato1: number;
let dato2: number;

dato1 = Number(prompt("Ingrese el primer numero entero"));
dato2 = Number(prompt("Ingrese el segundo numero entero"));

let contador: number;
let total: number;
total = 0;

for (contador = dato1; contador <= dato2; contador++) {
  total = total + contador;
}

console.log("la suma es: " + total);
