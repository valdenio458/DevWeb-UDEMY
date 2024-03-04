class ContaBancaria {
    // atributos
    public agencia: number;
    public conta: number;
    public saldo: number;
    public limite: number;
    
    constructor(agencia: number, conta: number, saldo: number, limite: number) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
        this.limite = limite;
    }
     // métodos
    public sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }
    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public consultarSaldo(): number { 
        return this.saldo;
    }
}

let conta1 = new ContaBancaria(123, 456, 1000, 500);
let conta2 = new ContaBancaria(123, 457, 1100, 500);

console.log(conta1.consultarSaldo());
conta1.sacar(50);
console.log(conta1.consultarSaldo());

console.log(conta2.consultarSaldo());