import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials){
    return new Promise((accept, reject) => {
      this.storage.get("user").then((data) => {
        console.log(data.password)
      if ( 
        credentials.email == "test@test.com" && credentials.password == "123456789"
      ) { 
        accept("Login Correcto");
    } else {
      reject("Login Incorrecto")
    }
      }
      );
  }
    );
  }

  registerUser(registerData){
    registerData.password = btoa(registerData.password)
    return this.storage.set("user", registerData)
  }

}
