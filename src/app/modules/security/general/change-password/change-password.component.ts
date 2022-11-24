import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CredentialsUserModel } from 'src/app/models/credentials-user.model';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/shared/security.service';
const CryptoJS = require("crypto-js");
declare const GenerarVentanaModal:any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  formularioChange: FormGroup=new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private serviceSecurity: SecurityService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.ConstruccionFormulario();
  }

  ConstruccionFormulario(){
    this.formularioChange=this.fb.group({
        email:["",[Validators.required,Validators.email]],
        currentPassword:["",[Validators.required, Validators.minLength(8)]],
        newPassword:["",[Validators.required, Validators.minLength(8)]],
        confirmPassword:["",[Validators.required, Validators.minLength(8)]]

    });
}

ChangePassword(){
    if(this.formularioChange.invalid){
        GenerarVentanaModal("The username, password or confirm is incorrect");
    }else{
      let datos = new CredentialsUserModel();
      datos.user=this.formularioChange.controls['email'].value;
      datos.password=CryptoJS.MD5(this.formularioChange.controls['currentPassword'].value).toString();
      datos.newPassword=CryptoJS.MD5(this.formularioChange.controls['newPassword'].value).toString();
      datos.confPassword=CryptoJS.MD5(this.formularioChange.controls['confirmPassword'].value).toString();
      this.serviceSecurity.ChangePasswordService(datos).subscribe({
        next: (data)=>{
          console.log(data);
          if(data == true){
            GenerarVentanaModal("Change password successfully");
            this.router.navigate(['home']);
            }else{
              GenerarVentanaModal("Wrong change password. Please check the passwords");
              this.router.navigate(['home']);
          }
        },
        error:(e)=>console.log(e)
        });
     this.router.navigate(['home']);
    }
}

}
