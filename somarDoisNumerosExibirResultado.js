/*
    Solicite 2 numeros, faça a soma deles
    e apresente o resultado final ao usuario
*/

alert("Iremos somar 2 números")
let numeroUm = prompt("Digite o primeiro numero: ", 0)
let numeroDois = prompt("Digite o segundo numero: ", 0)
let resultado = Number(numeroUm) + Number(numeroDois);

alert(`Resultado final: ${resultado}`)