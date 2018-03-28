import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaisinfoPage } from './maisinfo';

@NgModule({
  declarations: [
    MaisinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MaisinfoPage),
  ],
})
export class MaisinfoPageModule {}
