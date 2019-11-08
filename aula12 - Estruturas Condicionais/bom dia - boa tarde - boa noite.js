var agora = new Date()  // pegando hora atual
var hr = agora.getHours() // usando hora atual
console.log(`Hora atual: ${hr} hs.`)
if( hr < 6 ){
    console.log('Estamos na madruga!')
}else if( hr < 12 ){
    console.log('Bom dia!')
}else if( hr === 12 ){
    console.log('Meio-dia!')
}else if( hr <= 18 ){
     console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}
