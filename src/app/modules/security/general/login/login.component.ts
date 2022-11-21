import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CredentialsUserModel } from 'src/app/models/credentials-user.model';
import { SecurityService } from 'src/app/services/shared/security.service';
declare const GenerarVentanaModal:any;
const CryptoJS = require("crypto-js");

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup=new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private serviceSecurity: SecurityService
  ) { }

  ngOnInit(): void {
    this.ConstruccionFormulario();
  }
  ConstruccionFormulario(){
    this.formularioLogin=this.fb.group({
        user:["ccerquer@yahoo.com",[Validators.required,Validators.email]],
        password:["hWibGj9yOa",[Validators.required, Validators.minLength(8)]]
    });
}
Login(){
    if(this.formularioLogin.invalid){
        GenerarVentanaModal("Todos los campos son Requeridos");
    }else{
      let datos = new CredentialsUserModel();
      datos.user=this.formularioLogin.controls['user'].value;
      datos.password=CryptoJS.MD5(this.formularioLogin.controls['password'].value).toString();
     this.serviceSecurity.Login(datos).subscribe({
        next: (data:any)=>console.log(data),
        error:(e)=>console.log(e)
      });
    }
}
}
