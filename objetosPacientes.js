/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let pacientes = [
  {
    nome: "Diogo Mendes",
    idade: 33,
    peso: 115,
    altura: 186
  },
  {
    nome: "Sabrina Carpenter",
    idade: 23,
    peso: 50,
    altura: 156
  },
  {
    nome: "Sofia Carson",
    idade: 27,
    peso: 60,
    altura: 160
  }
]

console.log(pacientes)

for (const paciente of pacientes) {
  console.log(`Seja bem vindo ${paciente?.nome}`)
}