var inputSalario = document.querySelector('#ganho-mes')

var inputHoras = document.querySelector('#horas-dia')

var resultado = document.querySelector('#resposta')

function calcularValorHora(){
    var salario = inputSalario.valueAsNumber
    var horas = inputHoras.valueAsNumber
    var diasUteisMes = 22
    var horasMes = horas * diasUteisMes
    var valorHora = salario / horasMes
    var valorDuasCasas = valorHora.toFixed(2)
    
    resultado.textContent = "R$" + valorDuasCasas

}
