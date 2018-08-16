import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as Leaflet from 'leaflet'
import 'leaflet-draw';
import { ListaPage } from '../lista/lista';


declare const L: any;

@Component({
  selector: 'page-Map',
  templateUrl: 'map.html'
})
export class MapaPage {

  map: any;
  data: any;
  estado: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(): void {
    this.drawMap();
  }
  drawMap(): void {
    this.map = Leaflet.map('map').setView([-0.2187979, -78.5166102], 16);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'AppTuto',
      maxZoom: 18
    }).addTo(this.map);

    //Panecillo
    var panecillo = L.marker([-0.2307987, -78.5234213]).addTo(this.map);
    L.marker([-0.2307987, -78.5234213]).addTo(this.map)
      .bindPopup('El Panecillo.')
      .openPopup();


    //Calle de la Ronda
    var calleoRonda = L.marker([-0.221765, -78.5137505]).addTo(this.map);
    L.marker([-0.221765, -78.5137505]).addTo(this.map)
      .bindPopup('Calle la Ronda.')
      .openPopup();


    //teatro simon bolivar
    var simonBolivar = L.marker([-0.2216564, -78.5133852]).addTo(this.map);
    L.marker([-0.2216564, -78.5133852]).addTo(this.map)
      .bindPopup('Teatro Simon Bolivar.')
      .openPopup();

    //teatro sucre
    var teatroSucre = L.marker([-0.2192493, -78.5104751]).addTo(this.map);
    L.marker([-0.2192493, -78.5104751]).addTo(this.map)
      .bindPopup('El teatro Sucre.')
      .openPopup();

    //Museo de la Ciudad de Quito
    var ciudadQuito = L.marker([-0.2230599, -78.5172466]).addTo(this.map);
    L.marker([-0.2230599, -78.5172466]).addTo(this.map)
      .bindPopup('Museo de la Ciudad de Quito.')
      .openPopup();

    //Banco central del Ecuador (atiguo)
    var bancoCentral = L.marker([-0.2185633, -78.5135661]).addTo(this.map);
    L.marker([-0.2185633, -78.5135661]).addTo(this.map)
      .bindPopup('Antiguo Banco Central del Ecuador.')
      .openPopup();

    //Basilica del devoto nacional
    var basilica = L.marker([0.2154759, -78.5098654]).addTo(this.map);
    L.marker([0.2154759, -78.5098654]).addTo(this.map)
      .bindPopup('La Basilica.')
      .openPopup();

    // Catedral Metropolitana de Quito
    var catedralQuito = L.marker([-0.2204725, -78.5147612]).addTo(this.map);
    L.marker([-0.2204725, -78.5147612]).addTo(this.map)
      .bindPopup('Museo del Carmen Alto.')
      .openPopup();

    //Museo del Carmen Alto
    var carmenAlto = L.marker([-0.2227502, -78.5173526]).addTo(this.map);
    L.marker([-0.2227502, -78.5173526]).addTo(this.map)
      .bindPopup('Museo del Carmen Alto.')
      .openPopup();

    // La Merced
    var mercerd = L.marker([-0.2179875, -78.5157497]).addTo(this.map);
    L.marker([-0.2179875, -78.5157497]).addTo(this.map)
      .bindPopup('La Merced.')
      .openPopup();

    //Plaza de San Agustín
    var sanAgustin = L.marker([-0.2230599, -78.5172466]).addTo(this.map);
    L.marker([-0.2230599, -78.5172466]).addTo(this.map)
      .bindPopup('Plaza de San Agustín.')
      .openPopup();

    //Iglesia y plaza de Santo Domingo
    var santoDomingo = L.marker([-0.224207, -78.5147612]).addTo(this.map);
    L.marker([-0.224207, -78.5147612]).addTo(this.map)
      .bindPopup('Plaza de Santo Domingo')
      .openPopup();
  }

  lista() {
    this.navCtrl.push(ListaPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }
}