class TV {
  private _relacaoCanais: number[];
  private _canalAtual: number;
  private _volume: number;


  constructor(relacaoCanais: number[], canalAtual: number, volume: number) {
    this._relacaoCanais = relacaoCanais;
    this._canalAtual = canalAtual;
    this._volume = volume;
  }

  //* Métodos especias
  get canalAtual(): number {
    return this._canalAtual;
  }

  set canalAtual(canal: number) {
    let canais = this._relacaoCanais.includes(canal);
    if (canais === false) {
      console.log('Canal não encontrado');      
    } else {
      console.log(`Canal: ${tv._canalAtual = canal}`);
     }
  }
}

let tv = new TV([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8, 10);
tv.canalAtual = 3
;
//console.log(tv.canalAtual);
