import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';

/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {
  nombre: string;
  contrasena: string;
  correo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarsePage');
  }


  enviar(){
    let data = {nombreUsuario: this.nombre, correo: this.correo, contraseña: this.contrasena};
    this.http.post('https://localhost:44386/api/todoes',data).subscribe(r=>{
      console.log(r);
    });
    
    this.navCtrl.push(HomePage);
    
    alert('Los datos se han enviado correctamente, ahora ingresa a nuestra app');
  
  }


}
