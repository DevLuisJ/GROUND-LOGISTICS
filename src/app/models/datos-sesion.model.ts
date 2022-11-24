import { DatosUserModel } from "./datos-user.model";

export class DatosSesionModel{
    info?: DatosUserModel;
    tk?: string;
    isLoggedIn:boolean=false;
}
