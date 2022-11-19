import { Injectable } from '@angular/core';
import { DatosSesionModel } from 'src/app/modelos/datos-sesion.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  GuardarDatosSesion(datos:DatosSesionModel){
    let datosActuales=localStorage.getItem("datossesion67");
    if (datosActuales) {
      return false;
    } else {
      let datosSesionString=JSON.stringify(datos);
      localStorage.setItem("datossesion67", datosSesionString);
      return true;
    }
  }

  EliminarDatosSesion(){
    let datosActuales = localStorage.getItem("datossesion67");
    if (datosActuales) {
      localStorage.removeItem("datossesion67");
      return true;
    } else {
      return false;
    }
  }
  ObtenerToken():string{
    let datosActuales=localStorage.getItem("datossesion67");
    if(datosActuales){
      let datoSesionJson= JSON.parse(datosActuales);
      return datoSesionJson.tk;
    }else{
      return "";
    }
  }
  ObtenerSesionInfo(): DatosSesionModel | null{
    let datosActuales=localStorage.getItem("datossesion67");
    if (datosActuales){
      let datoSesionJson=JSON.parse(datosActuales);
      return datoSesionJson;

    }else {
      return null;
    }
  }
}
