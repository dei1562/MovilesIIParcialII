import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalVehiculosPage } from './modal-vehiculos';

@NgModule({
  declarations: [
    ModalVehiculosPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalVehiculosPage),
  ],
  entryComponents: [
    ModalVehiculosPage
  ]
})
export class ModalVehiculosPageModule {}
