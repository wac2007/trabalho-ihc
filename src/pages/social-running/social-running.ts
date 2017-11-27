import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistRicoPage } from '../hist-rico/hist-rico';
import { CadastroPage } from '../cadastro/cadastro';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';


@Component({
  selector: 'page-social-running',
  templateUrl: 'social-running.html'
})
export class SocialRunningPage {

  constructor(public navCtrl: NavController) {
  }
  goToHistRico(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TabsControllerPage);
  }
  goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroPage);
  }
}
