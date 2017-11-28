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
import { VerInformaEsPage } from '../pages/ver-informa-es/ver-informa-es';
import { HomePageModule } from '../pages/home/home.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    MyApp,
    CadastroPage,
    HistoryPage,
    EncontrarParceiroPage,
    CorrendoPage,
    VerInformaEsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    HistoryPage,
    EncontrarParceiroPage,
    CorrendoPage,
    VerInformaEsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}