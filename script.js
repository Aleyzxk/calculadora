let text1 = ""; //variable para acumular las teclas
let operador1 = "";
let operador2 = "";
let resultado = "";

function primer(event) {
    
    switch (event.key) {
        case 'Enter':
            operador1 = parseFloat(text1);
            document.getElementById('op1').textContent = operador1;
            text1 = "";
            document.getElementById('output').textContent = '';
            //detiene la escucha
            document.removeEventListener('keydown', primer);
            //activa escucha para segunda solamente
            document.addEventListener('keydown', segunda);
            break;
        case 'Backspace':
            text1 = text1.slice(0, -1);
            break;
        default:
            text1 += event.key;
            document.getElementById('output').textContent = text1;
            break;
    }
}
//modo despues del primer enter
function  segunda(event) {
    switch(event.key){
        case 'Enter':
            operador2 = parseFloat(text1);
            document.getElementById('op2').textContent = operador2;
            text1 = "";
            document.getElementById('output').textContent = '';

            break;
        case 'Backspace':
            text1 = text1.slice(0,-1);
            break;
        default:
            text1 += event.key;
            document.getElementById('output').textContent = text1;
            break;
    }
}

document.addEventListener('keydown', primer);

function opera(operador) {
    switch (operador) {
        case 1:
            resultado = suma(operador1, operador2);
            document.getElementById('output').textContent = resultado;
            break;
        case 2: 
            resultado = resta(operador1, operador2);
            document.getElementById('output').textContent = resultado;
            break;
        case 3: 
            resultado = multiplicacion(operador1, operador2);
            document.getElementById('output').textContent = resultado;
            break;
        case 4: 
            resultado = division(operador1, operador2);
            document.getElementById('output').textContent = resultado;
            break;
    }
}

function suma(operador1, operador2) {
    resultado = operador1 + operador2;  
    return resultado;  
}
function resta(operador1, operador2) {
    resultado = operador1 - operador2;  
    return resultado;  
}
function multiplicacion(operador1, operador2) {
    resultado = operador1 * operador2;  
    return resultado;  
}
function division(operador1, operador2) {
    resultado = operador1 / operador2;  
    return resultado;  
}