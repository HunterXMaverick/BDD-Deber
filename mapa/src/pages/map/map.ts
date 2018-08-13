import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as Leaflet from 'leaflet';

declare const L: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  map: any;
  data: any;
  estado: any;

  constructor(public navCtrl: NavController) {

  }
  ngOnInit(): void {
    this.drawMap();
  }
  drawMap(): void {
    this.map = Leaflet.map('map').setView([-0.2187979, -78.5166102], 13);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'AppTuto',
      maxZoom: 18
    }).addTo(this.map);

    //Panecillo
    var panecillo = L.marker([-0.2307987, -78.5234213]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([-0.2307987, -78.5234213])
      .setContent("El Panecillo.")
      .openOn(this.map);
    //Calle de la Ronda
    var calleoRonda = L.marker([-0.221765, -78.5137505]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([-0.221765, -78.5137505])
      .setContent("Calle la Ronda.")
      .openOn(this.map);

    //teatro simon bolivar
    var simonBolivar = L.marker([-0.2216564, -78.5133852]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([-0.2216564, -78.5133852])
      .setContent("La Simon Bolivar.")
      .openOn(this.map);

    //teatro sucre
    var teatroSucre = L.marker([-0.2192493, -78.5104751]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([-0.2192493, -78.5104751])
      .setContent("El teatro Sucre.")
      .openOn(this.map);

    //Museo de la Ciudad de Quito
    var ciudadQuito = L.marker([-0.2230599, -78.5172466]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([-0.2230599, -78.5172466])
      .setContent("Museo de la Ciudad de Quito.")
      .openOn(this.map);


    //Banco central del Ecuador (atiguo)
    var bancoCentral = L.marker([-0.2185633, -78.5135661]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([-0.2185633, -78.5135661])
      .setContent("Antiguo Banco Central del Ecuador.")
      .openOn(this.map);

    //Basilica del devoto nacional, Quito
    var basilica = L.marker([0.2154759, -78.5098654]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([0.2154759, -78.5098654])
      .setContent("La Basilica.")
      .openOn(this.map);

    // Catedral Metropolitana de Quito, Eugenio Espejo, Quito
    var catedralQuito = L.marker([-0.2204725, -78.5147612]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([-0.2204725, -78.5147612])
      .setContent("Catedral Metropolitana de Quito.")
      .openOn(this.map);

    //Museo del Carmen Alto, Quito
    var carmenAlto = L.marker([-0.2227502, -78.5173526]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([-0.2227502, -78.5173526])
      .setContent("Museo del Carmen Alto.")
      .openOn(this.map);

    // La Merced
    var mercerd = L.marker([-0.2179875, -78.5157497]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([-0.2179875, -78.5157497])
      .setContent("La Merced.")
      .openOn(this.map);

    //Plaza de San Agustín
    var sanAgustin = L.marker([-0.2179875, -78.5157497]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([-0.2230599, -78.5172466])
      .setContent("Plaza de San Agustín.")
      .openOn(this.map);

    //Iglesia y plaza de Santo Domingo
    var santoDomingo = L.marker([-0.224207, -78.5147612]).addTo(this.map);

    var popup = L.popup()
      .setLatLng([-0.224207, -78.5147612])
      .setContent("Museo de la Ciudad de Quito")
      .openOn(this.map);

  }

}