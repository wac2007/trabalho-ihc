import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HistRicoPage } from '../hist-rico/hist-rico';
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
    this.navCtrl.setRoot(HistRicoPage);
  }

  goSignUp() {
    this.navCtrl.push(CadastroPage);
  }

}
