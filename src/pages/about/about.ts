import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // any pega qualquer coisa: texto, números...
    lista: Array<any> = [
      {
        titulo: "Cachorro",
        color: "#444"
      },
      {
        titulo: "Gato",
        color: "#999"
      }
    ]

  constructor(public navCtrl: NavController) {
    
  }

}
