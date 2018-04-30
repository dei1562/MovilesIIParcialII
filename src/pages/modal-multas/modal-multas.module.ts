import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalMultasPage } from './modal-multas';

@NgModule({
  declarations: [
    ModalMultasPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalMultasPage),
  ],
  entryComponents: [
    ModalMultasPage
  ]
})
export class ModalMultasPageModule {}
