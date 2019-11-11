function gerar(){ 
    var entrada = Number(window.document.getElementById("entrada").value)
    var casa = window.document.getElementById("lista")

    // length ou 'comprimento', forma de pegar quandas letras tem dentro do input.
    if(entrada.length == null){
        window.alert("Iremos considerar campo entrada com \n valor igual a zero!")
    }
    for(var i=0; i <= 10; i++){
        var resul = entrada*i
        casa.innerHTML += `<option value="">${i} x ${entrada} = ${resul}</option>`
    }
}