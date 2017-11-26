import {AuthService} from "../../../services/auth";
import { AuthPage } from '../../auth/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage  {

 

  constructor(public navCtrl: NavController, public navParams: NavParams, public AuthService: AuthService) {
    //super(AuthService, navCtrl)
  }

  ionViewCanEnter() {
    //super.ionViewCanEnter();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
