let botao = document.getElementById("botao")
let pesob = document.getElementById("peso")
let alturab = document.getElementById("altura")

botao.addEventListener("click", () => {
    let peso = pesob.value
    let altura = alturab.value 
    altura = altura/100

    let imc = altura*altura
    imc = peso/imc
    console.log(imc)
    InImc(imc)
})

function InImc(val){
    let sec = document.getElementById("inner")
    sec.innerHTML = `<p>Seu Imc é de <span>${val.toFixed(1)}</span></p>`

    if(val <= 18.5){
        sec.innerHTML += "<p>Você está <span>abaixo do peso</span></p>"
    }else if(val <= 24.9){
        sec.innerHTML += "<p>Você está no <span>peso ideal</span></p>"
    }else if(val <= 29.9){
        sec.innerHTML += "<p>Você está com <span>sobrepeso</span></p>"
    }else if(val <= 34.9){
        sec.innerHTML += "<p>Você está com <span>obesidade de grau 1</span></p>"
    }else if(val <= 39.9){
        sec.innerHTML += "<p>Você está com <span>obesidade de grau 2</span></p>"
    }else{
        sec.innerHTML += "<p>Você está com <span>obesidade de grau 3</span></p>"
    }
}