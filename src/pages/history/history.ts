import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ViewInfoPage } from '../view-info/view-info';


@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  public year = 2017;
  public month = 11;
  constructor(public navCtrl: NavController) {
  }

  public viewInfo() {
    this.navCtrl.push(ViewInfoPage);
  }
}
