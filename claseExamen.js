function salarioJuan(salarioAnual)
{
    let salarioAnual = 21600
    let resultadoSalarioMensual = salarioAnual / 12 
    return console.log('Tu salario mensual es de: '+ resultadoSalarioMensual)
}

function salarioMarcos(salarioMensual)
{
    let salarioMensual = 1500
    let resultadoSalarioAnual = 1500 * 12
    return console.log('Tu salario anual es de: '+ resultadoSalarioAnual)
}

function calcularPromedio(nota1, nota2, nota3)
{
    let nota1 = prompt('Ingresa la primera nota')
    let nota2 = prompt('Ingresa la segunda nota')
    let nota3 = prompt('Ingresa la tercera nota')
    let resultadoPromedio = (nota1+nota2+nota3)/ 3
    return alert('Tu promedio es: '+ resultadoPromedio)
}
