import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { HistRicoPage } from '../pages/hist-rico/hist-rico';
import { EncontrarParceiroPage } from '../pages/encontrar-parceiro/encontrar-parceiro';
import { CorrendoPage } from '../pages/correndo/correndo';
import { VerInformaEsPage } from '../pages/ver-informa-es/ver-informa-es';
import { HomePageModule } from '../pages/home/home.module';



@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage,
    CadastroPage,
    HistRicoPage,
    EncontrarParceiroPage,
    CorrendoPage,
    VerInformaEsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsControllerPage,
    CadastroPage,
    HistRicoPage,
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