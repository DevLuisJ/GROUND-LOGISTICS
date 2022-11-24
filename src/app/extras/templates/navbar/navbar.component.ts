import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DatosSesionModel } from 'src/app/models/datos-sesion.model';
import { SecurityService } from 'src/app/services/shared/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sesionActiva : Boolean=false;  //NavBar se oculte y aparezca cuando el cliente se autentique
  subscription:Subscription=new Subscription();

  constructor(
    private serviceSecurity : SecurityService
  ) { }

  ngOnInit(): void {
  this.EstadoSesion();
  }

  EstadoSesion(){
    this.subscription=this.serviceSecurity.ObtenerInfoSesion().subscribe({
        next: (datos:DatosSesionModel)=>{
            this.sesionActiva=datos.isLoggedIn;
        }
    })
}

}
