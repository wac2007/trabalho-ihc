import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HistoryPage } from '../history/history';
import { CadastroPage } from '../cadastro/cadastro';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goHistory() {
    this.navCtrl.setRoot(HistoryPage);
  }

  goSignUp() {
    this.navCtrl.push(CadastroPage);
  }

}
