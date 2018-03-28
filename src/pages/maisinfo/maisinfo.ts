import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaisinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maisinfo',
  templateUrl: 'maisinfo.html',
})
export class MaisinfoPage {
  /*
     Cria uma variável item e vamos ocupar os elementos em navParams, para poder utilizar
      cada um dos elementos, teremos que ir para maisinfo.html
  */
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaisinfoPage');
  }

}
