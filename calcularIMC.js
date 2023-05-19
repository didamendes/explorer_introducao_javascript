/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

let pacientes = [
  {
    nome: "Diogo Mendes",
    idade: 33,
    peso: 115,
    altura: 186,
    getImc() { 
      return (this.peso / ((this.altura / 100) ** 2)).toFixed(2) 
    }
  },
  {
    nome: "Sabrina Carpenter",
    idade: 23,
    peso: 50,
    altura: 156,
    getImc() { 
      return (this.peso / ((this.altura / 100) ** 2)).toFixed(2) 
    }
  },
  {
    nome: "Sofia Carson",
    idade: 27,
    peso: 60,
    altura: 160,
    getImc() { 
      return (this.peso / ((this.altura / 100) ** 2)).toFixed(2) 
    }
  }
]

function IMC(peso, altura) {
  return (peso / ((altura / 100) ** 2)).toFixed(2)
}

const printPacienteImc = (paciente) => 
  console.log(`Paciente ${paciente.nome} possui o IMC de: ${IMC(paciente.peso, paciente.altura)}`)

for (const paciente of pacientes) {
  printPacienteImc(paciente)
}