const pokemon1 = {
	nome: 'Bulbasaur',
	tipo: 'Grama',
	nivel: 5
};
//a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando 
//nome por “Squirtle” e tipo por “Água”
const novopokemon1 = {...pokemon1,nome: 'Squirtle',tipo: 'Água'}
//b) No objeto original, adicione mais uma propriedade, chamada ataques. 
//Esta propriedade deve guardar um array de objetos com a estrutura abaixo. 
//Inicie a propriedade como um array vazio, e crie o objeto abaixo 
//utilizando **push()**
console.log(pokemon1)
console.log(novopokemon1)
pokemon1.ataques = []
console.log (pokemon1.ataques)
const ataque1 = {nome: "investida",
dano: 40,
tipo: "Normal",
precisao:100
}
pokemon1.ataques.push(ataque1)
console.log (pokemon1.ataques)
//c) Na cópia do objeto original, adicione a propriedade 
//ataques a partir do espalhamento da propriedade criada para o objeto original;
console.log(novopokemon1)

novopokemon1.ataques = []
 console.log (novopokemon1)
 novopokemon1.ataques = [...pokemon1.ataques]

 //d) para o objeto original, adicione o ataque
 // “Folha Navalha”, com 45 de dano, 100 de precisão, e de tipo “Grama”;
 pokemon1.ataques.push({nomeAtaque2: "Folha Navalha", 
 dano: 45, 
 tipo:"Grama",
 precisao:100})

 console.log(pokemon1)
 //e) para a cópia, crie o ataque “Jato de Água”, 
 //com 40 de dano, 100 de precisão, e do tipo “Água”;
 novopokemon1.ataques.push({nomeAtaque3: "Jato de água", 
 dano: 40, 
 tipo:"água",
 precisao:100})
//f) Imprima os dois objetos no console.
 console.log(pokemon1)
 console.log(novopokemon1)
