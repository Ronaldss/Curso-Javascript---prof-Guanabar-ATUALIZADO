function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // ano atual com 4 dígitos
    var fano = document.getElementById('txtano')// ano obtido no input do formulário
    var res = document.querySelector('div#res')

    // Fechando o escopo da pesquisa
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img') // criando um elemento img via JS
        img.setAttribute('id', 'foto') // criando um id chamado foto via JS p/ o elemento que foi criado acima.

        
        if  (fsex[0].checked){
            genero = 'Homem'

            // Verificando idade de homem
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'bebe-m.jpg')
                img.style.height = '200px'
                img.style.borderRadius = '100%'
                console.log('Criança')
            }else if (idade < 21){
                img.setAttribute('src','jovem-m.jpg')
                img.style.height = '200px'
                img.style.borderRadius = '100%'
                console.log('Jovem')
            }else if ( idade < 50 ){
                img.setAttribute('src','adulto-m.jpg')
                img.style.height = '200px'
                img.style.borderRadius = '100%'
                console.log('Adulto')
            }else{
                img.setAttribute('src','idoso-m.jpg')
                img.style.height = '300px'
                img.style.borderRadius = '100%'
                console.log('Idoso')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'

            // Verificando idade de mulher
            if (idade >=0 && idade < 10){
                img.setAttribute('src','bebe-f.jpg')
                img.style.height = '200px'
                img.style.borderRadius = '100%'
                console.log('Criança')
            }else if (idade < 21){
                img.setAttribute('src','jovem-f.jpg')
                img.style.height = '200px'
                img.style.borderRadius = '100%'
                console.log('Jovem')
            }else if ( idade < 50 ){
                img.setAttribute('src','adulta-f.jpg')
                img.style.height = '200px'
                img.style.borderRadius = '100%'
                console.log('Adulta')
            }else{
                img.setAttribute('src','idosa-f.jpg')
                img.style.height = '300px'
                img.style.borderRadius = '100%'
                console.log('Idosa')
            }
        }
        res.style.textAlign = 'center'  // centralizando com JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // mandando mostrar o elemento criado
    }
}
