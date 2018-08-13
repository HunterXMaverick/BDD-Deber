import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { MapaPage } from '../map/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: string;
  contrasena: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ingresar() {
    this.navCtrl.push(MapaPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}