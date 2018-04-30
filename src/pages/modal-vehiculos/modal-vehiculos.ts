import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController } from 'ionic-angular';

import { ModalMultasPage } from '../modal-multas/modal-multas';

import { Vehiculo } from '../../model/customer/customer.vehiculo';

@Component({
  templateUrl: 'modal-vehiculos.html',
})
export class ModalVehiculosPage {

  myParam: null;
  titulo = 'Nuevo Vehiculo';
  flagButton = false;

  vehiculo : Vehiculo =  {
    placa : '',
    modelo: '',
    year: null,
    multas: new Array()
  };

  constructor(public viewCtrl: ViewController, public navParams: NavParams,
              public modalCtrl: ModalController) {

    this.myParam = navParams.get('vehiculo');

    if(this.myParam !== null && this.myParam !== undefined){
      this.vehiculo = this.myParam;
      this.titulo   = "Editar Vehiculo";
      this.flagButton = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalVehiculosPage');
  }

  dismiss(eliminar) {
    this.viewCtrl.dismiss({
      'vehiculo': this.vehiculo,
      'actualizado': this.flagButton,
      'eliminar': eliminar
    });
  }

  openModalMultas(multa) {

    if(!this.vehiculo.multas){
      this.vehiculo.multas = new Array();
    }

    var index = this.vehiculo.multas.indexOf(multa);    

    let multasModal = this.modalCtrl.create(ModalMultasPage, {'multa': multa});

    multasModal.onDidDismiss(data => {
      if(data.eliminar === true){
        this.vehiculo.multas.slice(index,1);
      }else if(data.actualizado === false){
        this.vehiculo.multas.push(data.multa);
      }else{
        this.vehiculo.multas[index] = data.multa;
      }
    });
    
    multasModal.present();
  }

}
