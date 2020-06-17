import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email:"", senha:""
  };

  constructor(public navCtrl: NavController, 
              public menu: MenuController,
              public auth: AuthService) {
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
    this.auth.authenticate(this.creds).subscribe(response => {
      console.log(response.headers.get("Authorization"));
      this.navCtrl.setRoot("CategoriasPage");  
    }, 
      error => {}
      );
  }
}
