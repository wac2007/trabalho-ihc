import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistRicoPage } from '../hist-rico/hist-rico';
import { VerInformaEsPage } from '../ver-informa-es/ver-informa-es';
import { SocialRunningPage } from '../social-running/social-running';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  constructor(public navCtrl: NavController) {
  }
  goToHistRico(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistRicoPage);
  }
  goBack(params){
    if (!params) params = {};
    this.navCtrl.pop();
  }
}
