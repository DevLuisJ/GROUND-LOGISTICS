import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/models/Order.model';
import { LocalStorageService } from 'src/app/services/shared/local-storage.service';
import { AdministrationService } from 'src/app/services/shared/administration.service';
declare const GenerarVentanaModal:any;

@Component({
  selector: 'app-create-orden',
  templateUrl: './create-orden.component.html',
  styleUrls: ['./create-orden.component.css']
})

export class CreateOrdenComponent {
  formularioCreateOrder: FormGroup=new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private serviceAdministration:  AdministrationService,
    private servicioLocalStorage: LocalStorageService,
    private router:Router
  ) {}

  tk: string = this.servicioLocalStorage.ObtenerToken();

  ngOnInit():void {
    this.ConstruccionFormulario();
    }

  ConstruccionFormulario(){
    this.formularioCreateOrder=this.fb.group({
        name:["carlos cerquera losada",[Validators.required]],
        idUser:["1",[Validators.required]],
        company:["2",[Validators.required]],
        vessel:["3",[Validators.required]],
        note:["4",[Validators.required]],
            });
  }

createOrder(){

  if(this.formularioCreateOrder.invalid){
      GenerarVentanaModal("All fields must be completed");
  }else{
    let datos = new OrderModel();
    datos.individualName=this.formularioCreateOrder.controls['name'].value;
    datos.company=this.formularioCreateOrder.controls['company'].value;
    datos.vessel=this.formularioCreateOrder.controls['vessel'].value;
    datos.note=this.formularioCreateOrder.controls['note'].value;

    this.serviceAdministration.CrearOrderService(datos).subscribe({
        next: (datos:OrderModel)=>{
            GenerarVentanaModal("Order has been succesfully created");
            this.router.navigate(["home"]);
        },
        error:(e)=>console.log(e)
    });
  }
}

}



