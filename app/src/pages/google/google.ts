import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';


@Component({
  selector: 'page-google',
  templateUrl: 'google.html',
  providers: [GooglePlus]
})
export class GooglePage {

  permissoes = ['public_profile', 'user_friends', 'email', 'user_about_me'];
  perfil: any;

  constructor(private google: GooglePlus, private navParams: NavParams, public navCtrl: NavController) {
  }

  logar() {
    this.google.login({})
      .then((res) => { this.perfil = res; })
      .catch(e => console.log('Erro', e));
  }

  sair() {
    this.google.logout()
      .then(() => { this.perfil = undefined; })
      .catch(e => console.log('erro', e));
  }

}
