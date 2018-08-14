import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  item;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
