function gerar(){ 
    let entrada = window.document.getElementById("entrada").value
    let casa = window.document.getElementById("lista")

    // length ou 'comprimento', forma de pegar quantas letras tem dentro do input.
    console.log(`*${String(entrada)}*`)
    if(String(entrada) == "" || entrada == "0"){
        window.alert("Iremos considerar campo entrada com \n valor igual a zero!")
    }
    entrada = Number(entrada)
    for(var i=0; i <= 10; i++){
        var resul = entrada*i
        casa.innerHTML += `<option value="">${entrada} x ${i} = ${resul}</option>`
    }
}