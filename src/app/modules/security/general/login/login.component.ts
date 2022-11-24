import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsUserModel } from 'src/app/models/credentials-user.model';
import { DatosSesionModel } from 'src/app/models/datos-sesion.model';
import { LocalStorageService } from 'src/app/services/shared/local-storage.service';
import { SecurityService } from 'src/app/services/shared/security.service';
const CryptoJS = require("crypto-js");
declare const GenerarVentanaModal:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   formularioLogin: FormGroup=new FormGroup({});
   mostrar:Boolean=true;
   siteKey: string="";

  constructor(
    private fb: FormBuilder,
    private serviceSecurity: SecurityService,
    private servicioLocalStorage: LocalStorageService,
    private router:Router
  ) {
    this.siteKey="6Ld6BCwjAAAAAMBTkRCSXqSyZQQp7Cz8AjLhmPMn"   //Se copia la clave dada por google
  }

  ngOnInit(): void {
    this.ConstruccionFormulario();
  }
  ConstruccionFormulario(){
    this.formularioLogin=this.fb.group({
        user:["ccerquer@yahoo.com",[Validators.required,Validators.email]],
        password:["HMMynbmXQ0",[Validators.required, Validators.minLength(8)]],
        recaptcha:["",[Validators.required,]]
    });
}
Login(){
    if(this.formularioLogin.invalid){
        this.mostrar=false;
        GenerarVentanaModal("The username or password is incorrect or did not pass the captcha");
    }else{
      let datos = new CredentialsUserModel();
      datos.user=this.formularioLogin.controls['user'].value;
      datos.password=CryptoJS.MD5(this.formularioLogin.controls['password'].value).toString();
      this.serviceSecurity.Login(datos).subscribe({
        next: (data:DatosSesionModel)=>{
          console.log(data);
          if(data.tk){
            GenerarVentanaModal("si tiene tk");
            GenerarVentanaModal("Welcome a your APP");
            let guardar=this.servicioLocalStorage.GuardarDatosSesion(data);
            data.isLoggedIn=true;
            this.serviceSecurity.VerificarSesionActiva();
            this.router.navigate(['home']);

          }else{
            GenerarVentanaModal("No  tiene tk");
          }

        },
        error:(e)=>console.log(e)
        });
     this.router.navigate(['home']);
    }
}
}
