import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapaPage } from '../map/map';
import {InfoPage} from '../info/info';

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
        'description': 'Es el sitio más visitado de la ciudad. Se ha convertido en el más importante mirador natural de la ciudad, desde el que se puede apreciar la disposición urbana de la capital ecuatoriana, desde su centro histórico y hacia los extremos norte y sur.',
        'color': '#0CA9EA'
      },
      {
        'title': 'La Ronda',
        'icon': 'image',
        'description': 'La Ronda es una de las calles más tradicionales que se encuentran en Quito, es una calle que nos lleva a nuestro pasado indígena, y en esas ancestrales épocas no se llamaba La Ronda, como le nombraron los españoles o como la conocemos en la actualidad, si no que se supone que su nombre original fue la de “El Chaquiñán”, término que ahora se lo traduce como camino o sendero.',
        'color': '#0CA9EA'
      },
      {
        'title': 'Teatro Simon Bolivar',
        'icon': 'image',
        'description': 'El Teatro Bolívar, considerado el mayor exponente de la arquitectura art-nuvó en el país, se encuentra emplazado en la calle Espejo, entre Guayaquil y Flores, en el Centro Histórico de la ciudad de Quito.!',
        'color': '#0CA9EA'
      },
      {
        'title': 'Teatro Sucre',
        'icon': 'image',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'Museo de La Ciudad de Quito',
        'icon': 'image',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'Banco central del Ecuador (atiguo)',
        'icon': 'image',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'La Basilica',
        'icon': 'image',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'Catedral Metropolitana de Quito',
        'icon': 'image',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'Museo del Carmen Alto',
        'icon': 'image',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'La Merced',
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

  openNavDetailsPage(item) {
    this.navCtrl.push(InfoPage, { item: item });
  }

}