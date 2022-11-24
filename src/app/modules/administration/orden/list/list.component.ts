import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/Order.model';
import { AdministrationService } from 'src/app/services/shared/administration.service';
declare const GenerarVentanaModal:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listaOrder: OrderModel[]=[];

  constructor(
    private serviceAdministration:  AdministrationService,

  ) { }

  ngOnInit(): void {
  this.ConsultarOrder();
  }

  ConsultarOrder(){
    this.serviceAdministration.ConsultarOrderService().subscribe({
      next:(datos:OrderModel[])=>{
        this.listaOrder=datos;
        console.log(datos);
      },
      error:(e)=>console.log(e)
    });
  }


}
