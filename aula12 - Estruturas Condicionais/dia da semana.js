var agora = new Date()
var diaSemana = agora.getDay()

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
5 = Quinta
6 = Sexta
7 = Sábado
*/

/*
    USANDO SWITCH - ESTRUTURA CONDIÇAO MULTIPLA
*/
diaSemana = diaSemana
console.log(`Número do dia da semana: ${diaSemana}`)

switch(diaSemana){
    case 0:
        console.log('Domingo')
    break
    case 1:
        console.log('Segunda-Feira')
    break
    case 2:
        console.log('Terça-Feira')
    break
    case 3:
        console.log('Quarta-Feira')
    break
    case 4:
        console.log('Quinta-Feira')
    break
    case 5:
        console.log('Sexta-Feira')
    break
    case 6:
        console.log('Sábado')
    break
    case 7:
        console.log('Domingo')
    break
    default:
        console.log('[Error] - input inválido.')
    break // este último break pe opcional.
}