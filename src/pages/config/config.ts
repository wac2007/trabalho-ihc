import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HistoryPage } from '../history/history';


@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goHistory() {
    this.navCtrl.setRoot(HistoryPage);
  }

}
