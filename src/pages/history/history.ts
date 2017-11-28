import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ViewInfoPage } from '../view-info/view-info';


@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  private year = 2017;
  private month = 11;
  constructor(public navCtrl: NavController) {
  }

  private viewInfo() {
    this.navCtrl.push(ViewInfoPage);
  }
}
