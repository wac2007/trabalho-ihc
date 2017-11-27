import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VerInformaEsPage } from '../ver-informa-es/ver-informa-es';

@Component({
  selector: 'page-hist-rico',
  templateUrl: 'hist-rico.html'
})
export class HistRicoPage {

  constructor(public navCtrl: NavController) {
  }
  goToVerInformaEs(params){
    if (!params) params = {};
    this.navCtrl.push(VerInformaEsPage);
  }
}
