import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  header = {'Access-Control-Request-Headers': '*'};
  mainUrl = "http://192.168.100.21:3000/";

  constructor() { }

  getUser(){
    return fetch(this.mainUrl + `users/${2}`,
    {mode: 'cors',
    headers: this.header}
    ).then((user) => user.json());
  }
}
