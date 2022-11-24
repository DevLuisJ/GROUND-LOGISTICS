import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/shared/security.service';
declare const GenerarVentanaModal:any;

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

formularioRecovery: FormGroup=new FormGroup({});

constructor(
  private fb: FormBuilder,
//    private serviceSeguridad: SeguridadService
  private serviceSecurity: SecurityService,
) { }

ngOnInit(): void {
  this.ConstruccionFormulario();
}

ConstruccionFormulario(){
  this.formularioRecovery=this.fb.group({
  email:["",[Validators.required,Validators.email]],
  });
}

PasswordRecovery(){
  if(this.formularioRecovery.invalid){
    GenerarVentanaModal("email not valid");
   }else{
    let email =this.formularioRecovery.controls['email'].value;
    console.log(email);
    GenerarVentanaModal("An email with the new password will be sent to: " +email);
    this.serviceSecurity.passwordRecoveryService(email).subscribe({
       next: (data:any)=>console.log(data),
       error:(e)=>console.log(e)
    });
  }
}
}
