//Exercicio 1

//Crie um array vazio chamado sacolao, e siga os passos abaixo:
sacolao= []
//a) Crie três objetos que vão representar frutas do sacolão. 
//Os objetos devem ter as seguintes propriedades:
const fruta1 = {
    nome:"Abacaxi",
    preco: 5, 
    disponibilidade: "false", 
}

const fruta2 = {
    nome:"Mamão",
    preco: 2, 
    disponibilidade: "true", 
}
const fruta3 = {
    nome:"Abacate",
    preco: 8, 
    disponibilidade: "true", 
}
//b) Adicione os objetos ao array sacolao utilizando o método push()

sacolao.push(fruta1,fruta2,fruta3)
console.log (sacolao)