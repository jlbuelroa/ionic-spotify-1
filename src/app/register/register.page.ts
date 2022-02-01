import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = "";
  validation_messages = {
    email: [
      { type: "required", message: "Ingrese el Email!" },
      { type: "pattern", message: "Email Invalido" }
    ],
    password: [
      { type: "required", message: "Ingrese una Contraseña minimo 6 caracter"},
     
    ],
    nombre: [
      { type: "required", message: "Ingresar Nombre!" }
    ],
    apellido: [
      { type: "required", message: "Ingresar Apellido" }
    ]
  }
  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private storage: Storage,private authService: AuthenticateService) {
    this.storage.create();
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      ),
      nombre: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      apellido: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      )
    });
   }

  ngOnInit() {
  }

  register(registerData){
    
    this.authService.registerUser(registerData).then(()=> {
      this.navCtrl.navigateBack("/login");
    } );
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }
}
