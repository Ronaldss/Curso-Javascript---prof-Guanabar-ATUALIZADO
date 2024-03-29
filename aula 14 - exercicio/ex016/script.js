function contar(){
    var casa = document.querySelector('p#contando');
    var v1 = Number(document.getElementById('v1').value)
    var v2 = Number(document.getElementById('v2').value)
    var passo = Number(document.getElementById('passo').value)

    // Validações
    if(v1<=0){
        window.alert("O campo 'Inicio' não pode ter valor \n menor que zero!")
    }else if(v1 >= v2 && passo > 0){
        calcularN()
    }else if(passo == 0){
        passo = 1
        window.alert("Estamos considerando variável passo\n com valor igual a 1 (um).")
        if(v1>=v2){
            calcularN()
        }else{calcularP()}
    }else{
        calcularP()
    }
    casa.innerHTML += ` \u{1F600}`

    // Contando
    function calcularP(){
        for(v1; v1 <= v2 ; v1 = v1+passo ){
            casa.innerHTML += `${v1} \u{1F449}` // Buscar no Google por 'unicode emoji list   U+1F600 = \u{1F600}'
        } 
    }  
    function calcularN(){
        for(v1; v1 >= v2 ; v1-=passo ){
            casa.innerHTML += `${v1} \u{1F449}` // Buscar no Google por 'unicode emoji list   U+1F600 = \u{1F600}'
        } 
    } 
}


// Criar a contagem regressiva com um for.S
// deixar a cor dos números que seram exibidos branca.