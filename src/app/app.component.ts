import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { TrainLocationPage } from '../pages/train-location/train-location';
import { ConfigPage } from '../pages/config/config';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public goTrain() {
    this.navCtrl.setRoot(TrainLocationPage);
  }

  public goHistory() {
    this.navCtrl.setRoot(HistoryPage);
  }

  public goConfig() {
    this.navCtrl.setRoot(ConfigPage);
  }

  public goHome() {
    this.navCtrl.setRoot(HomePage);
  }
  
}
