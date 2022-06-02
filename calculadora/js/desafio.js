var inputValorHora = document.querySelector('#valor-hora')

var inputHorasProjeto = document.querySelector('#horas-projeto')

var resultado = document.querySelector('#resposta')

function calcular(){
    var valorHora = inputValorHora.valueAsNumber
    var horasProjeto = inputHorasProjeto.valueAsNumber
    var valorProjeto = valorHora * horasProjeto
     
    resultado.textContent = "R$" + valorProjeto.toFixed(2)
    
   
}


