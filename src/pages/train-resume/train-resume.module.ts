import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainResumePage } from './train-resume';

@NgModule({
  declarations: [
    TrainResumePage,
  ],
  imports: [
    IonicPageModule.forChild(TrainResumePage),
  ],
})
export class TrainResumePageModule {}
