import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qtdAdultos: number;
  qtdCriancas: number;
  totalSalgadinhos: number = 0;
  totalRefrigerante: number = 0;
  totalBolo: number = 0;
  constructor() {}

  calcular(){
    this.totalBolo = (this.qtdAdultos * 100) + (this.qtdCriancas * 100);
    this.totalSalgadinhos = (this.qtdAdultos * 10) + (this.qtdCriancas * 7);
    this.totalRefrigerante = (this.qtdAdultos * 400) + (this.qtdCriancas * 300);
    }

}
