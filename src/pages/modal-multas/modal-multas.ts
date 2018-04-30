import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { Multa } from '../../model/customer/customer.vehiculo.multa';

@Component({
  selector: 'page-modal-multas',
  templateUrl: 'modal-multas.html',
})
export class ModalMultasPage {

  myParam: null;
  titulo = 'Nueva Multa';
  flagButton = false;

  multa : Multa =  {
    codigo: '',
    fecha: null,
    descripcion: '',
    estado: null,
    valor: null
  };

  today = new Date().toJSON().split('T')[0];

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {

    this.myParam = navParams.get('multa');

    if(this.myParam !== null && this.myParam !== undefined){
      this.multa = this.myParam;
      this.titulo   = "Editar Multa";
      this.flagButton = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalVehiculosPage');
  }

  dismiss(eliminar) {
    this.viewCtrl.dismiss({
      'multa': this.multa,
      'actualizado': this.flagButton,
      'eliminar': eliminar
    });
  }

}
