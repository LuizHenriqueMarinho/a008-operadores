//# Exercício 1

//Construa um programa que:

//a) Peça ao usuário que insira um número **par**

let par
console.log(par = prompt("digite um número par"))

//b) Imprima no console **o resto da divisão** desse número por 2.
par = Number(par)  //transforma a string em number
console.log(typeof par)
let restoPar
restoPar = par%2
console.log("o resto do número por 2 é: ", restoPar) //os números pares possuem resto 0 quando divididos por 2.

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

 //os números pares possuem resto 0 quando divididos por 2.

//d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código

 //o resto será 1

//>💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número