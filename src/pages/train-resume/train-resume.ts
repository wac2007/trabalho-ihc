import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HistoryPage } from '../history/history';


@IonicPage()
@Component({
  selector: 'page-train-resume',
  templateUrl: 'train-resume.html',
})
export class TrainResumePage {

  public beginTrain = 2;
  public share = 'Y';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBegin() {
    this.navCtrl.setRoot(HistoryPage);
  }

}
