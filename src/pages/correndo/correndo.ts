import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-correndo',
  templateUrl: 'correndo.html'
})
export class CorrendoPage {

  constructor(public navCtrl: NavController) {
  }
  goToHistRico(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistoryPage);
  }
}
