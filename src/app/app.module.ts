import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FIREBASE_CONFIG } from './firebase.credentials';

import { MyApp } from './app.component';
import { CustomerListService } from './../service/customer-list.service';
import { ModalVehiculosPageModule } from './../pages/modal-vehiculos/modal-vehiculos.module';
import { ModalMultasPageModule } from './../pages/modal-multas/modal-multas.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    ModalVehiculosPageModule,
    ModalMultasPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerListService
  ]
})
export class AppModule {}
