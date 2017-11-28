import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainLocationPage } from './train-location';

@NgModule({
  declarations: [
    TrainLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainLocationPage),
  ],
})
export class TrainLocationPageModule {}
