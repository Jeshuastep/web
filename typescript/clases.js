"use strict";
var Calculadora = /** @class */ (function () {
    function Calculadora(valor) {
        console.log('Iniciando calculadora..');
        this.numero = valor;
        console.log(this.numero);
    }
    Calculadora.prototype.sumar = function () {
        return this.numero + this.numero;
    };
    return Calculadora;
}());
var calcA = new Calculadora(10);
console.log(calcA.sumar());
var calcB = new Calculadora(15);
console.log(calcB.sumar());
