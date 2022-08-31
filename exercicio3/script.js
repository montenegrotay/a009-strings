//A partir da frase a seguir, faça o que se pede

//Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
//a) Crie uma const no seu código para guardar a frase (com aspas e tudo);

//b) Crie uma nova string a partir da primeira, trocando verde por rosa, e azul por laranja;

//c) Verifique se a nova string inclui verde, e se inclui laranja.

//EXTRA: tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”



//Crie a const para a frase aqui


const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair.`
console.log(`Analise a frase: \n`+frase)


const primeiraAlteracao = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja")
console.log(`Veja a substituíção: \n`+primeiraAlteracao)



const segundaAlteracao = `Jorge tem uma casa rosa e com portão laranja, com os dizeres: "BOAS VINDAS,`

const citacao = "mas não deixa o gato sair."


const fraseMaiuscula = citacao.toUpperCase()

console.log(`Finalização: \n` + segundaAlteracao, fraseMaiuscula)


const verde = segundaAlteracao.includes("verde") //false
const laranja = segundaAlteracao.includes("laranja") //true

console.log("A nova string inclui verde? "+segundaAlteracao.includes("verde"))
console.log("A nova string inclui laranja? "+segundaAlteracao.includes("laranja"))







