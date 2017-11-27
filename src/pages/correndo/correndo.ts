import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistRicoPage } from '../hist-rico/hist-rico';

@Component({
  selector: 'page-correndo',
  templateUrl: 'correndo.html'
})
export class CorrendoPage {

  constructor(public navCtrl: NavController) {
  }
  goToHistRico(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistRicoPage);
  }
}
