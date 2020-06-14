import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  login(){
    // método push empilha a página
    //this.navCtrl.push("CategoriasPage");
    this.navCtrl.setRoot("CategoriasPage");
  }
}
