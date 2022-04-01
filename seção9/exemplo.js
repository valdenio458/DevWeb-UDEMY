//* Paradigma Procedural:
let a = 10;
let b = 20;
let operador = 'multi';

function calcular(a, b, operador) {
    if (operador === 'soma') {
        return a + b;
    } else if (operador === 'sub') {
        return a - b;
    } else if (operador === 'multi') {
        return a * b;
    } else if (operador === 'div') {
        return a / b;
    } else {
        return 'Operador inválido';
    }
}

//* Paradigma OO:
class Calculadora {
    constructor(a, b, operador) {
        this.a = a;
        this.b = b;
        this.operador = operador;
    }

    calcular() {
        if (this.operador === 'soma') {
            return this.a + this.b;
        } else if (this.operador === 'sub') {
            return this.a - this.b;
        } else if (this.operador === 'multi') {
            return this.a * this.b;
        } else if (this.operador === 'div') {
            return this.a / this.b;
        } else {
            return 'Operador inválido';
        }
    }
}

calculadora = new Calculadora(8, 2, 'multi');
console.log(calculadora.calcular());