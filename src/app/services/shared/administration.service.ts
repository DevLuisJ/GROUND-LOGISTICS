import { Injectable } from '@angular/core';
import { OrderModel } from 'src/app/models/Order.model';
import { SecurityService } from '../shared/security.service';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdministrationService {

  constructor(
    private http:HttpClient,
    private servicioLocalStorage: LocalStorageService,
    private SecurityService:SecurityService,
  ) { }


  tk: string = this.servicioLocalStorage.ObtenerToken();

  CrearOrderService(order: OrderModel):Observable<OrderModel>{
    return this.http.post<OrderModel>(`${this. SecurityService.url}/orders` ,{
      individualName: order.individualName,
      company: order.company,
      vessel:order.vessel,
      note:order.note,
      "date": "2022-11-24T02:32:35.999Z",
      "covid": true,
      "status": "string",
      "totalService": 0,
      "totalExpense": 0,
      "totalOrder": 0,
      },
    {
        headers: new HttpHeaders({
        Authorization:`Bearer ${this.tk}`
        })
    });
}
////
ConsultarOrderService():Observable<OrderModel[]>{
  return this.http.get<OrderModel[]>(`${this.SecurityService.url}/orders`);
  }

////
}
