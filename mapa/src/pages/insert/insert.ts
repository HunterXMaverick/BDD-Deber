import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
})
export class InsertPage {

  nombre: string;
  usuario: string;
  contrasena: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }

}
