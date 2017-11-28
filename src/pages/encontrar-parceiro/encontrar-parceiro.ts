import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CorrendoPage } from '../correndo/correndo';

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
