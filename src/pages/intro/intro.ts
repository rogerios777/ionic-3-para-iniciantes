import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides = [
    {
      title : "SISVATS 2.0",
      description : "Novo sistema de formulário do SINPAF. Versão 2.0 com funcionamento na WEB e no celular.",
      image : "assets/imgs/slide1.png"
    },
    {
      title : "Slide 2",
      description : "Descrição do slide 2",
      image : "assets/imgs/slide2.png"
    },
    {
      title : "Slide 3",
      description : "Descrição do slide 3",
      image : "assets/imgs/slide3.png"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  goToTabsPAge()
  {
    this.navCtrl.push(TabsPage);
  }

}
