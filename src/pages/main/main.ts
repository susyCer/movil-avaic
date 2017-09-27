import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';



@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  @ViewChild(Slides) slides: Slides;
  skipMsg:String ="Skip";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  skip(){
    this.navCtrl.push(PrincipalPage);
  }

slideChange(){
  if (this.slides.isEnd())
  this.skipMsg ="Hecho";
}
}
