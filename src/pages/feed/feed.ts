import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage 
{
  public nome_usuario:string = "Rogério Rios Júnior";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) 
  {}

  showAlert() 
  {
    var total = this.somaDois(5,6);
    var msn = "Resosta: " + total;
    let alert = this.alertCtrl.create({
      title: 'Resposta!',
      subTitle: msn,
      buttons: ['OK']
    });
    alert.present();
  }

  private somaDois(num1:number, num2:number):number
  {
    var total:number = num1 + num2;
    return total;
  }

  ionViewDidLoad() 
  {
    this.showAlert();
  }

}
