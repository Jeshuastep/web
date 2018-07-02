class Calculadora 
{
    numero:number;

    constructor(valor:number)
    {
        console.log('Iniciando calculadora..')
        this.numero = valor;

        console.log(this.numero);
    }

    sumar()
    {
        return this.numero + this.numero;
    }
}

let calcA = new Calculadora(10);

console.log(calcA.sumar());

let calcB = new Calculadora(15);
console.log(calcB.sumar());