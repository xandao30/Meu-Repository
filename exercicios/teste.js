console.log("TESTE")
const teste = "teste"

//comentario um linha 

/*
comentario de mais de uma linha
*/

let nome = "Xandão"
let idade = 20

console.log("tenho" ,idade, "e me chamo", nome)

//Operadores aritimeticos
const soma = 2 + 2
const subtracao = 2 - 2
const multiplicacao = 2 * 2
const divisao = 2 / 2
const resto = 3 % 2

//Operadores de coperacao
const igual = 2 == 2
const diferente = 3 != 2
const maior = 3 > 2
const menor = 2 > 3
const maiorOuIgual = 2 > 3
const menorOuIgual = 3 <= 2

//Estruturas condições
idade = 16;

if (idade >= 18){
    console.log("Maior de idade")
}

if (idade >= 18){
console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

//Operador ternario

const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log("Menssagem ->" , mensagem)

//Arrays - Listas

const frutas = ["Maça","banana","uva"]
console.log(frutas[0])
console.log(frutas[1])

console.log("Quantas frutas tem no array?")
console.log("E agora, quantas frutas tem no array?")
console.log(frutas.length)

frutas.forEach(frutas => console.log(frutas))

frutas.pop()
console.log(frutas)