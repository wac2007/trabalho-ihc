import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ver-informa-es',
  templateUrl: 'ver-informa-es.html'
})
export class VerInformaEsPage {

  constructor(public navCtrl: NavController) {
  }
  goBack(params){
    if (!params) params = {};
    this.navCtrl.pop();
  }
}
