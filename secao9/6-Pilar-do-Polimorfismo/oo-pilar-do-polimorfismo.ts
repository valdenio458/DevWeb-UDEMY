class Animal1 {
  //* atributos
  public cor: string;
  public tamanho: number;
  public peso: number;

  constructor(cor: string, tamanho: number, peso: number) {
    this.cor = cor;
    this.tamanho = tamanho;
    this.peso = peso;
  }
  //* métodos
  dormir(){
    console.log('Dormindo...');
  }}

class Passaro1 extends Animal1{
  //* atributos
  public bico: string;

  constructor(bico: string, cor: string, tamanho: number, peso: number) {
    super(cor, tamanho, peso);
    this.bico = bico;
  }
  //* métodos
  voar(){
    console.log('Voando...');
  }
    
}

class Papagaio1 extends Passaro1{
  //* atributos
    public sabeFalar: boolean;  

  constructor(sabeFalar: boolean, cor: string, tamanho: number, peso: number) {
    super('Medio', cor, tamanho, peso);   
    this.sabeFalar = sabeFalar;
    
  }
  //* métodos
  falar(){
    if(this.sabeFalar){
      console.log('Falando...');
    }else{
      console.log('Não sabe falar...');
    }
  }
    
}

class Avestruz extends Passaro1 {
  constructor(){
  super('Grande', 'Cinza', 250, 15000);
  }

  enterrarCabeca(){
    console.log('Enterrando cabeça...');
  }
  voar(): void {
    console.log('Não voa...');
  }}clearInterval

let papagaio1 = new Papagaio1(true, 'Verde', 25, 350);
console.log(papagaio1);
papagaio1.voar();

let avestruz = new Avestruz();
avestruz.enterrarCabeca();
avestruz.voar();