const botonNumeros = document.getElementsByName('numero');
const botonOpera = document.getElementsByName('operador');
const botonIgual = document.getElementsByName('igual')[0];
const botonDelete = document.getElementsByName('borrar')[0];
const porcentaje = document.getElementById('porcentaje');
var result = document.getElementById('subtotal1');
var total = document.getElementById('total');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);        
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);        
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
    calcularTotal();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

function calcularTotal(){
    total.value = parseFloat(opeActual) + (porcentaje.value * parseFloat(opeActual) / 100);
}

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
    console.log(opeActual);
}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
    total.value = '';
    porcentaje.value = '5';
}

function actualizarDisplay(){
    result.value = opeActual;
}

clear();


