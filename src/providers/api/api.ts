import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import {Headers} from "@angular/http";

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  private token: string;
  private apiUrl: string = 'http://developpeurwebapplimobile.com/';

  constructor(public http: HttpClient, public storage: Storage) {}

  get(endpoint, params ?: any) {
    return this.http.get(this.apiUrl + endpoint, {
      params: params,
    });
}

post(endpoint, body, options ?: any) {
  return this.http.post(this.apiUrl + endpoint, body, options);
}

put(endpoint, body, options ?: any) {
  return this.http.put(this.apiUrl + endpoint, body, options);
}

delete(endpoint, body) {
  return this.http.delete(this.apiUrl + endpoint);
}

patch(endpoint, body) {
  return this.http.patch(this.apiUrl + endpoint, body);
}

  
}
