import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MapaPage} from '../map/map';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {
  items = [
    'Panecillo',
    'Calle de la Ronda',
    'Teatro Simon Bolivar',
    'Teatro Sucre',
    'Museo de la Ciudad de Quito',
    'Banco central del Ecuador (atiguo)',
    'Basilica del devoto nacional, Quito',
    'Catedral Metropolitana de Quito',
    'Museo del Carmen Alto',
    'La Merced',
    'Plaza de San Agustín',
    'plaza de Santo Domingo'
  ];
  constructor(public navCtrl: NavController) {

  }
  lista() {
    this.navCtrl.push(MapaPage);
    console
  }

}