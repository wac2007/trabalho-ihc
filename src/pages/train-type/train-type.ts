import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TrainResumePage } from '../train-resume/train-resume';


@IonicPage()
@Component({
  selector: 'page-train-type',
  templateUrl: 'train-type.html',
})
export class TrainTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTrainResume() {
    this.navCtrl.push(TrainResumePage);
  }

}
