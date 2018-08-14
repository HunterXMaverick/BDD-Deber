import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapaPage } from '../map/map';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html'
})
export class ListaPage {
  listas = [];

  constructor(public navCtrl: NavController) {
    this.listas = [
      {
        'title': 'Panecillo',
        'icon': 'image',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#0CA9EA'
      },
      {
        'title': 'Calle de la Ronda',
        'icon': 'image',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      }
    ];
  }
  lista() {
    this.navCtrl.push(MapaPage);
    console
  }

}