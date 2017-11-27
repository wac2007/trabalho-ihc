import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistRicoPage } from '../hist-rico/hist-rico';
import { EncontrarParceiroPage } from '../encontrar-parceiro/encontrar-parceiro';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HistRicoPage;
  tab2Root: any = EncontrarParceiroPage;
  constructor(public navCtrl: NavController) {
  }
  
}
