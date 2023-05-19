/*
    Capturar 2 numeros
    e fazer as operacoes matematicas
    de soma, subtracao, multiplicacao,
    divisâo e resto da divisão.

    E para cada operação mostrar um alerta
    com o resultado.
*/

let numeroUm = prompt("Digite o primeiro numero: ", 0)
let numeroDois = prompt("Digite o segundo numero: ", 0)

numeroUm = Number(numeroUm)
numeroDois = Number(numeroDois)

const soma = numeroUm + numeroDois
const sub = numeroUm - numeroDois
const mul = numeroUm * numeroDois
const div = numeroUm / numeroDois
const res = numeroUm % numeroDois

alert(`Adição: ${soma}`);
alert(`Substração: ${sub}`);
alert(`Multiplicacao: ${mul}`);
alert(`Divisão: ${div}`);
alert(`Resto: ${res}`);

