import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth";
import {PasswordValidation} from "../../../validators/PasswordValidation";
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
   

  public registerData: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public authService: AuthService, public authProvider: AuthProvider, public toastCtrl: ToastController) {
    this.registerData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      firstname: ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
      lastname: ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      passwordConfirmation: ['', Validators.compose([Validators.required])],
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  submitRegistration() {
    console.log(this.registerData)
this.authProvider.register(this.registerData.value).subscribe(response => {
  console.log(response);

  if( response['success'] ) {
    this.navCtrl.setRoot('LoginPage');
  } else {
    let toast = this.toastCtrl.create({
      message: response['error'],
      cssClass: 'toast-danger',
      duration: 3000,
    });
    toast.present();
  }
}, error => {
  console.log(error);


});
  }


  gotologin(){
    this.navCtrl.setRoot('LoginPage');
  }

}
