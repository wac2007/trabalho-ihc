import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CorrendoPage } from '../correndo/correndo';
import { HistRicoPage } from '../hist-rico/hist-rico';
import { VerInformaEsPage } from '../ver-informa-es/ver-informa-es';

@Component({
  selector: 'page-encontrar-parceiro',
  templateUrl: 'encontrar-parceiro.html'
})
export class EncontrarParceiroPage {

  constructor(public navCtrl: NavController) {
  }
  goToCorrendo(params){
    if (!params) params = {};
    this.navCtrl.push(CorrendoPage);
  }
}
