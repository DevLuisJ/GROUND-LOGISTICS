import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatosUserModel } from 'src/app/models/datos-user.model';
import { RolesModel } from 'src/app/models/roles.model';
import { SecurityService } from 'src/app/services/shared/security.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  listaRoles:RolesModel[]=[];

  constructor(
    private fb:FormBuilder,
    private serviceSecurity: SecurityService,
    ){}

  //Ahora en el ngOnInit invocamos el método Roles para que traiga la lista de los roles Cada vez que se abra o escoja el componente (página)
ngOnInit(): void {
  this.Roles();
}
formularioRegistro: FormGroup=new FormGroup({});


Formulario(){
  this.formularioRegistro=this.fb.group({
      nombre:[""],
      correo:[""],
      celular:[""],
      perfil:[""],
      rol:[""]
  })
}

RegistroUsuarios(){
  if(this.formularioRegistro.invalid){
      alert("los datos con asterisco son obligatorios");
  }else{
      let usuario = new DatosUserModel();
      usuario.nombre=this.formularioRegistro.controls['nombre'].value;
      usuario.correo=this.formularioRegistro.controls['correo'].value;
      usuario.celular=this.formularioRegistro.controls['celular'].value;
      usuario.perfil=this.formularioRegistro.controls['perfil'].value;
      usuario.roles=this.formularioRegistro.controls['rol'].value;

      //TODO Hay que completar con todos los campos
  }
}

//En el mismo componente crear-user.component.ts creamos el método para hacer la consulta de los roles.
Roles(){
  this.serviceSecurity.ObtenerRoles().subscribe({
      next:(data:RolesModel[])=>{
          this.listaRoles=data;
      },
      error:(e)=> console.log(e)
  })
 }
}
