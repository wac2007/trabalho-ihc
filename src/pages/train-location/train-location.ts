import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TrainTypePage } from '../train-type/train-type';


@IonicPage()
@Component({
  selector: 'page-train-location',
  templateUrl: 'train-location.html',
})
export class TrainLocationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTrainType() {
    this.navCtrl.push(TrainTypePage);
  }

}
