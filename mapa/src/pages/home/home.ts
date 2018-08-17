import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { MapaPage } from '../map/map';
import { RegistrarsePage } from '../registrarse/registrarse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nombre: string;
  usuario: string;
  contrasena: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  ingresar(){
    let f = {usuario: this.usuario, contrasena: this.contrasena}
    console.log(this.usuario);
    console.log(this.contrasena);
    this.navCtrl.push(MapaPage);

  }

  registrar() {
    this.navCtrl.push(RegistrarsePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}