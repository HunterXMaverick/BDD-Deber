import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { MapaPage } from '../map/map';
import { InsertPage } from '../insert/insert';


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

  registrar() {
    this.navCtrl.push(InsertPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}