import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainTypePage } from './train-type';

@NgModule({
  declarations: [
    TrainTypePage,
  ],
  imports: [
    IonicPageModule.forChild(TrainTypePage),
  ],
})
export class TrainTypePageModule {}
