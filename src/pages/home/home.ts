import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Customer } from '../../model/customer/customer.model';
import { CustomerListService } from '../../service/customer-list.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  customerList: Observable<Customer[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private customerListService: CustomerListService) {

    this.customerList = this.customerListService.getCustomerList()
                        .snapshotChanges()
                        .map(
                          changes => {
                            return changes.map( c=> ({
                              key: c.payload.key, ...c.payload.val()
                            }))
                          }
                        );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
