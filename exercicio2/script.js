//# Exercício 2

//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
/*
```
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/

let numero1
let numero2
console.log(numero1 = Number(prompt("digite o primeiro número")))
console.log(numero2 = Number(prompt("digite o segundo número")))

console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", (numero1 % numero2) === 0)
console.log("O primeiro segundo é divisível pelo primeiro?", (numero2 % numero1) === 0)
