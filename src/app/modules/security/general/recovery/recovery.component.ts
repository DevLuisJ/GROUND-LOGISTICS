import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CredentialsUserModel } from 'src/app/models/credentials-user.model';
import { SecurityService } from 'src/app/services/shared/security.service';
declare const GenerarVentanaModal:any;
const CryptoJS = require("crypto-js");

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  formularioRecovery: FormGroup=new FormGroup({});
  mostrar:Boolean=true;

  constructor(
    private fb: FormBuilder,
    private serviceSecurity: SecurityService
  ) { }

  ngOnInit(): void {
    this.ConstruccionFormulario();
  }

  ConstruccionFormulario(){
    this.formularioRecovery=this.fb.group({
        email:["",[Validators.required,Validators.email]],
        identification:["",[Validators.required, Validators.minLength(10)]]
    });
}
Recovery(){
  if(this.formularioRecovery.invalid){
    GenerarVentanaModal("Todos los Campos son Requeridos");
      this.mostrar=false;
  }else{
    GenerarVentanaModal("Válidando los Datos Suministrados");
    }
  }
}
