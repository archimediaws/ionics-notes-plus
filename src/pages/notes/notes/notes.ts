import { AuthService } from '../../../services/auth';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, public authService : AuthService, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }


  displayAlert() {
    let alert = this.alertCtrl.create({
      title: 'Deconnexion',
      subTitle: 'me deconnecter ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            this.navCtrl.setRoot("NotesPage");
            console.log('Fermeture de l\'alerte');
            
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.authService.removeToken();
            this.app.getRootNavs()[0].setRoot('LoginPage');
            //this.navCtrl.setRoot("LoginPage");
            let toast = this.toastCtrl.create({
              message: 'Vous êtes deconnecté !',
              position: 'bottom',
              duration: 2000,
            });
            toast.present();
            
          }
        }
      ]
    });

    alert.present();

    
    // alert.onDidDismiss(() => {
    //   this.navCtrl.setRoot("LoginPage");
    //   console.log('fermeture de l\'alerte');
    // })

  }

}
