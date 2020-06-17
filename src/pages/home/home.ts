import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email:"", senha:""
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {
  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }

  login(){
    // método push empilha a página
    //this.navCtrl.push("CategoriasPage");

    console.log(this.creds);
    this.navCtrl.setRoot("CategoriasPage");
  }
}
