import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular'; // importou AlertController junto porque o mesmo vem de ionic-angular
import { MaisinfoPage } from '../maisinfo/maisinfo';
import { Provider1Provider } from '../../providers/provider1/provider1';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios // variável que receberá os dados de um json (data)
  /*
       Inserir a vírgula e importar aqui também o AlertController. Para isso inserir: public alerta: AlertController
      para ter certeza que foi importado, olhar se o AlertController tá verdinho, se tá verde tá importado.
  */
  constructor(public navCtrl: NavController, public alerta: AlertController, public provedor: Provider1Provider) {}

// Para mais informações...  
  outraPagina(){
    this.navCtrl.push(MaisinfoPage); 
  }

// Retornado os dados da página web que está sendo chamado em provedor1.ts
  ionViewDidLoad(){
    this.provedor.obterDados() // função criada em provider1.ts
    .subscribe(
//esse (data) é um json, e precisa ser passado esse valor para uma variável, no caso, foi criado a variável usuários que receberá de json de vai ser igualada dados
      (data)=>{this.usuarios = data;}, 
      (error)=>{console.log(error);}
    )
  }

// Alerta básica que foi chamada em home.html
  alertaBasica(){
    /*  
        Para criar uma variável insira o let.
        Esse this.alerta, esse alerta tirei do meu construtor, public alerta 
    */
    let minhaAlerta = this.alerta.create({
      // propriedades descritas abaixo:
      title:'Título de alerta',
      message: 'Mensagem que pode entregar tua alerta',
      buttons:['Entendido']
    });
    minhaAlerta.present();
  }
 
  alertaBasica2(){
    /*  
        Para criar uma variável insira o let.
        Esse this.alerta, esse alerta tirei do meu construtor, public alerta 
    */
    let minhaAlerta2 = this.alerta.create({
      // propriedades descritas abaixo:
      title:'Login',
      message: 'Mensagem que pode entregar tua alerta',
      inputs: [ // Aqui está sendo criado um array
        {
          name: 'Nome',
          placeholder: 'Nome'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    minhaAlerta2.present();
  }
}
