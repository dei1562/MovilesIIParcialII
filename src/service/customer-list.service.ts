import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Customer } from '../model/customer/customer.model';

@Injectable()
export class CustomerListService{

    private customerListRef = this.db.list<Customer>('customers-list');

    constructor(private db: AngularFireDatabase){}

    getCustomerList(){
        return this.customerListRef;
    }

    addCustomer(customer: Customer){
        return this.customerListRef.push(customer);
    }

    updateCustomer(customer: Customer){
        return this.customerListRef.update(customer.key, customer);
    }

    removeCustomer(customer: Customer){
        return this.customerListRef.remove(customer.key);
    }
}