/* Estudando estruturas de LAÇO, REPETIÇÕES ou INTERAÇÕES.

USANDO A FORÇA BRUTA

console.log("Olá tudo bem!")
console.log("Olá tudo bem!")
console.log("Olá tudo bem!")
console.log("Olá tudo bem!")
console.log("Olá tudo bem!")
console.log("Olá tudo bem!")
*/
/*

TESTA PRIMEIRO E DEPOIS EXECUTA O BLOCO

contador = 1
while(contador < 7){
    console.log("Olá tudo bem!")
    contador++
}
*/

/*

EXECUTA O BLOCO E DEPOIS TESTA

contador = 1
do {
    console.log(`${contador} - Olá, tudo bem!`)
    contador++
}while(contador <= 10)

*/
var indice = 0
while(indice<=1000){
    console.log(`Repetição: ${indice}.`)
    indice++
}