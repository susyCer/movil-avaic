import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {  ElectrodosPage, TelemetriaPage, EstadosPage,VariablesPage } from "../index.paginas";

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;

  constructor() {

    this.tab1 = TelemetriaPage;
    this.tab2 = ElectrodosPage;
    this.tab3 = EstadosPage;
    this.tab4 = VariablesPage;

  }


}
