class Animal {
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
  }
}

class Cachorro extends Animal {
  //* atributos
  public orelhas: string;

  constructor(orelhas: string) {
    super('marrom', 1, 500);
    this.orelhas = orelhas;
  }
  //* métodos
  correr(){
    console.log('Correndo...');
  }    
rosnar(){
    console.log('Rosnando...');
  }

}

class Passaro extends Animal{
  //* atributos
  public bico: string;

  constructor(bico: string) {
    super('branco', 0.5, 200);
    this.bico = bico;
  }
  //* métodos
  voar(){
    console.log('Voando...');
  }
    
}

class Papagaio extends Passaro{
  //* atributos
    public sabeFalar: boolean;  

  constructor(sabeFalar: boolean) {
    super('pequeno');    
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
let cachorro = new Cachorro('caídas');
let passaro = new Passaro('pequeno');
let papagaio = new Papagaio(true);

cachorro.dormir();
passaro.dormir();
papagaio.dormir();
papagaio.falar();
papagaio.voar();

console.log(cachorro);
console.log(passaro);
console.log(papagaio);


