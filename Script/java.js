function soma(){
    let num1 = document.querySelector('#n1').value
    let num2 = document.querySelector('#n2').value
    let resultado = parseFloat(num1) + parseFloat(num2)

    document.getElementById('resposta').innerHTML = `o resultado é ${resultado}`
}

function subtrai(){
    let num1 = document.querySelector('#n1').value
    let num2 = document.querySelector('#n2').value
    let resultado = parseFloat(num1) - parseFloat(num2)

    document.getElementById('resposta').innerHTML = `o resultado é ${resultado}`
}

function multiplica(){
    let num1 = document.querySelector('#n1').value
    let num2 = document.querySelector('#n2').value
    let resultado = parseFloat(num1) * parseFloat(num2)

    document.getElementById('resposta').innerHTML = `o resultado é ${resultado}`
}

function dividi(){
    let num1 = document.querySelector('#n1').value
    let num2 = document.querySelector('#n2').value
    let resultado = parseFloat(num1) / parseFloat(num2)

    document.getElementById('resposta').innerHTML = `o resultado é ${resultado}`
}

function potencia() {
    let num1 = document.querySelector('#n1').value
    let num2 = document.querySelector('#n2').value
    let resultado = parseFloat(num1) ** parseFloat(num2)

    document.getElementById('resposta').innerHTML = `o resultado é ${resultado}`
}

function deltaX() {
    let aa = document.querySelector('#a').value
    let bb = document.querySelector('#b').value
    let cc = document.querySelector('#c').value
    let Delta = bb**2 - 4*aa*cc
    let XX1 = ((-1 * bb) + Math.sqrt(bb**2 - 4*aa*cc))/ (2 * aa)
    let XX2 = ((-1 * bb) - Math.sqrt(bb**2 - 4*aa*cc))/ (2 * aa)

    document.getElementById('X1').innerHTML = `O valor de X1 é: ${XX1}`
    document.getElementById('X2').innerHTML = `O valor de X2 é: ${XX2}`
    document.getElementById('triangulo').innerHTML = `O valor de DELTA é: ${Delta}`
}


//const delta = b**2 - 4*a*c
//const x1 = ((-1 * b) + Math.sqrt(delta))/ (2 * a)
//const x2 = ((-1 * b) - Math.sqrt(delta))/ (2 * a)