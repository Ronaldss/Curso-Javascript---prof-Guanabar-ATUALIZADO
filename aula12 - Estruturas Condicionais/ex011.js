
    var idade = 65
    console.log(`Com ${idade} anos,`)
    if (idade < 16){
        console.log('não vota.')
    }else if(idade < 18 || idade > 65){
        console.log('a votação é opcional.')
    }else{
        console.log('a votação é OBRIGATÓRIA!')
    }
