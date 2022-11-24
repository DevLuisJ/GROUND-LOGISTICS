import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosSesionModel } from 'src/app/models/datos-sesion.model';
import { LocalStorageService } from 'src/app/services/shared/local-storage.service';
import { SecurityService } from 'src/app/services/shared/security.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
      private serviceSecurity: SecurityService,
      private servicioLocalStorage: LocalStorageService,
      private router:Router
  ){}

ngOnInit(): void {
  this.servicioLocalStorage.EliminarDatosSesion();
  this.serviceSecurity.RefrescarDatosSesion(new DatosSesionModel());
  this.router.navigate(["/home"]);
}

}
