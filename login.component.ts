import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatosSesionModel } from 'src/app/modelos/datos-sesion.model';
import { LocalStorageService } from 'src/app/servicios/shared/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup=new FormGroup({});
  mostrar:Boolean=true;
  
  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private servicioLocalStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.ConstruccionFormulario();
  }
  ConstruccionFormulario(){
    this.formularioLogin=this.fb.group({
      user:["",[Validators.require,Validators.email]],
      pass:["",[Validators.require,Validators.minLength(8)]]
    })
  }
  Login(){
    if(this.formularioLogin.invalid){
      this.mostrar=false;
      GenerarVentanaModal("Information invalid");
    } else {
      let datos = new CredencialesUsedModel();
      datos.usuario=this.formularioLogin.controls['user'].value;
      datos.password=CryptoJS.MD5(this.formularioLogin.controls['pass'].value).toString();
      this.servicioSeguridad.Login(datos).subscribe({
        next: (data:DatosSesionModel)=>{
          console.log(data);
          let guardar=this.servicioLocalStorage.GuardarDatosSesion(data);
        },
        error:(e)=>console.log(e)
      });
    }
  }

}
