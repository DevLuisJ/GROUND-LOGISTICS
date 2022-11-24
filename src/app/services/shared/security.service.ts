import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { CredentialsUserModel } from 'src/app/models/credentials-user.model';
import { DatosSesionModel } from 'src/app/models/datos-sesion.model';
import { RolesModel } from 'src/app/models/roles.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

url:string="https://innovasoftback.herokuapp.com/"
infoSesion:BehaviorSubject<DatosSesionModel>= new BehaviorSubject<DatosSesionModel>(new DatosSesionModel())


  constructor(
    private http:HttpClient,
    //Se crea variable privada servicioLocalStorage para poder llamar un método creado en el local-storage.service.ts
  private servicioLocalStorage: LocalStorageService
 ) {
  //En el constructor de seguridad.service.ts se incluye verificarSesionActiva para efectos de que apenas abra el navegador el sistema le verifique si dejó una sesión activa o no y si la dejo activa le muestre el menú de cuando ya está logueado.
  this.VerificarSesionActiva();
  }

Login(Credentials:CredentialsUserModel):Observable<any>{
  return this.http.post(`${this.url}/LoginT`,{
    usuario:Credentials.user,
    password:Credentials.password
  });
}

VerificarSesionActiva(){
  let info=this.servicioLocalStorage.ObtenerSesionInfo();
  if(info){
      info.isLoggedIn=true;
      this.RefrescarDatosSesion(info);
      return true;
  }else{
      return false;
  }
}

RefrescarDatosSesion(datos:DatosSesionModel){
this.infoSesion.next(datos);
}

//7. Adiciono otro método en el servicio de seguridad (seguridad.services.ts). ObtenerInfoSesion.
ObtenerInfoSesion(){
  return this.infoSesion.asObservable()
}

ObtenerRoles():Observable<RolesModel[]>{
  return this.http.get<RolesModel[]>(`${this.url}/roles`);
}

passwordRecoveryService (emailAddress: string):Observable<any>{
 return this.http.post<any>(`${this.url}/Recuperar-contrasenaMod/${emailAddress}`,
 {
  emailAddress:emailAddress
 });
}

ChangePasswordService(Credentials:CredentialsUserModel):Observable<any>{
  return this.http.post(`${this.url}/ModificarPassUser`,{
    emailAddress:Credentials.user,
    currentPass:Credentials.password,
    newPass:Credentials.newPassword,
    confirmPass:Credentials.confPassword
  });
}

}  //Fin
