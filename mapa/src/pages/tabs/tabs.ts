import { Component } from '@angular/core';
import { MapaPage } from '../map/map';
import { HomePage } from '../home/home';
import { ListaPage } from '../lista/lista';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapaPage;
  tab2Root = HomePage;
  tab3Root = ListaPage;

  constructor() {}
}