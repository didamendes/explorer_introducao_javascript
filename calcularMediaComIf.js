/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let estudante = prompt("Digite o seu nome: ")
let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))
let nota3 = Number(prompt("Digite a terceita nota: "))

const media = ((nota1 + nota2 + nota3) / 3).toFixed(2)
const passou = media >= 6

if (passou) {
    alert(`${estudante} sua media foi ${media}. Parabens passou no bimestre !`)
} else {
    alert(`${estudante} sua media foi ${media}. Que pena não passou no bimestre, de vejo no posso ano !`)
}
