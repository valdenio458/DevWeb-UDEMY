//* Software de marcenaria
//*  Cadeira e sofá

//* Paradigma procedural
//* Cadeira

//* array de cadeiras
/* let cadeiras = Array();

cadeiras[0] =  Array();
cadeiras[0]['qte_pernas'] = 4;
cadeiras[0]['giratorio'] = false;
cadeiras[0]['cor'] = 'Azul';

cadeiras[1] =  Array();
cadeiras[1]['qte_pernas'] = 1;
cadeiras[1]['giratorio'] = true;
cadeiras[1]['cor'] = 'Vermelha';

function girar_cadeira(indice) {
  if(cadeiras[indice]['giratorio'] === true) {
      console.log('Girou a cadeira');
  } else {
      console.log('A cadeira não é giratória');

  }
}

function adicionar_cadeira(qte_pernas, giratorio, cor) {
  cadeiras.push(Array());
  cadeiras[cadeiras.length - 1]['qte_pernas'] = qte_pernas;
  cadeiras[cadeiras.length - 1]['giratorio'] = giratorio;
  cadeiras[cadeiras.length - 1]['cor'] = cor;
}

adicionar_cadeira(3, false, 'Verde');
console.log(cadeiras)
girar_cadeira(1);
*/
//* Paradigma orientado a objetos
class Cadeira {
  public qte_pernas: number;
  public giratorio: boolean;
  public cor: string;
  constructor(qte_pernas, giratorio, cor) {
    this.qte_pernas = qte_pernas;
    this.giratorio = giratorio;
    this.cor = cor;
  }
  girar() {
    if(this.giratorio === true) {
      console.log('Girou a cadeira');
    } else {
      console.log('A cadeira não é giratória');

    }
  }
}
let cadeira = new Cadeira(4, false, 'Azul');
let cadeira2 = new Cadeira(1, true, 'Vermelha');
console.log(cadeira);
cadeira.girar();
cadeira2.girar();

let cadeiras = [];

cadeiras.push(new Cadeira(4, false, 'Azul'));
cadeiras.push(new Cadeira(1, true, 'Vermelha'));
console.log(cadeiras);