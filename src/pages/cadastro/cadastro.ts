import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  constructor(public navCtrl: NavController) {
  }
  goToHistRico(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistoryPage);
  }
  goBack(params){
    if (!params) params = {};
    this.navCtrl.pop();
  }
}
