import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import {PrincipalPage,
        ElectrodosPage,
        EstadosPage,
        TelemetriaPage,
        VariablesPage
      } from '../pages/index.paginas';




@NgModule({
  declarations: [
    MyApp,
    MainPage,
    PrincipalPage,
    ElectrodosPage,
    TelemetriaPage,
    EstadosPage,
    VariablesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    PrincipalPage,
    ElectrodosPage,
    TelemetriaPage,
    EstadosPage,
    VariablesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
