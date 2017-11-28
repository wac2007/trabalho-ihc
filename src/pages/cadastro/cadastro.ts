import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConfigPage } from '../config/config';


@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  public radioXP;

  constructor(public navCtrl: NavController) {
  }
  
  doSave(){
    this.navCtrl.setRoot(ConfigPage);
  }
  goBack(){
    this.navCtrl.pop();
  }
}
