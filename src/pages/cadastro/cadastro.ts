import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  public radioXP;

  constructor(public navCtrl: NavController) {
  }
  goHistory(){
    this.navCtrl.setRoot(HistoryPage);
  }
  goBack(){
    this.navCtrl.pop();
  }
}
