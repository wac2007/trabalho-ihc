import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { CadastroPage } from '../pages/cadastro/cadastro';
import { HistoryPage } from '../pages/history/history';
import { EncontrarParceiroPage } from '../pages/encontrar-parceiro/encontrar-parceiro';
import { CorrendoPage } from '../pages/correndo/correndo';
import { HomePageModule } from '../pages/home/home.module';
import { ComponentsModule } from '../components/components.module';
import { ViewInfoPageModule } from '../pages/view-info/view-info.module';


@NgModule({
  declarations: [
    MyApp,
    CadastroPage,
    HistoryPage,
    EncontrarParceiroPage,
    CorrendoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    ComponentsModule,
    ViewInfoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    HistoryPage,
    EncontrarParceiroPage,
    CorrendoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}