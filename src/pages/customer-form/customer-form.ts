import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Customer } from '../../model/customer/customer.model';
import { CustomerListService } from '../../service/customer-list.service';

import { ModalVehiculosPage } from '../modal-vehiculos/modal-vehiculos';

@IonicPage()
@Component({
  selector: 'page-customer-form',
  templateUrl: 'customer-form.html',
})
export class CustomerFormPage {

  customer: Customer = {
    cedula : null,
    nombre: '',
    apellido: '',
    vehiculos: new Array()
  };

  titulo = 'Nuevo Propietario';
  flagButton = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private customerListService: CustomerListService,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    var tempCustomer = this.navParams.get("customer");
    if(tempCustomer !== null && tempCustomer !== undefined){
      this.customer = tempCustomer;
      this.titulo   = "Editar Propietario";
      this.flagButton = true;
    }
  }

  addCustomer(customer: Customer){
    this.customerListService.addCustomer(customer)
    .then(ref => {
      this.navCtrl.setRoot('HomePage');
    })
  }

  updateCustomer(customer: Customer){
    this.customerListService.updateCustomer(customer)
    .then(() => {
      this.navCtrl.setRoot('HomePage');
    })
  }

  removeCustomer(customer: Customer){
    this.customerListService.removeCustomer(customer)
    .then(() => {
      this.navCtrl.setRoot('HomePage');
    })
  }

  openModalVehiculos(vehiculo) {

    if(!this.customer.vehiculos){
      this.customer.vehiculos = new Array();
    }

    var index = this.customer.vehiculos.indexOf(vehiculo);

    let vehiculoModal = this.modalCtrl.create(ModalVehiculosPage, {'vehiculo': vehiculo});

    vehiculoModal.onDidDismiss(data => {

      if(data.eliminar === true){
        this.customer.vehiculos.slice(index,1);
      }else if(data.actualizado === false){
        this.customer.vehiculos.push(data.vehiculo);
      }else{
        this.customer.vehiculos[index] = data.vehiculo;
      }
    });

    vehiculoModal.present();
  }

}
