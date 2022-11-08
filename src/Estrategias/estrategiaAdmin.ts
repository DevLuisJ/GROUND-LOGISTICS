import { AuthenticationStrategy } from "@loopback/authentication";
import { service } from "@loopback/core";
import { Request, RedirectRoute, HttpErrors } from "@loopback/rest";
import { UserProfile } from "@loopback/security";
import { ParamsDictionary } from "express-serve-static-core";
import parseBearerToken from "parse-bearer-token";
import { ParsedQs } from "qs";
import { AutenticacionService } from "../services";

//Para indicar si tiene o no permiso de acuerdo al rol
var respuesta: Boolean = false;

export class EstrategiaAdmin implements AuthenticationStrategy {
    name: string = "Admin";
    constructor(
        @service(AutenticacionService)
        public servicioAutenticacion: AutenticacionService
    ) { }
    async authenticate(request: Request): Promise<UserProfile | undefined> {
        let token = parseBearerToken(request);
        if (token) {
            let datos = this.servicioAutenticacion.ValidarToken(token);
            if (datos) {
                if (datos.data.role) {
                    datos.data.role.forEach(function (x: any) {
                        if (x.role == "Administrator") {
                            respuesta = true;
                        }
                    });
                    if (respuesta) {
                        let perfil: UserProfile = Object.assign({
                            nombre: datos.data.nombre
                        });
                        return perfil;
                    } else {
                        throw new HttpErrors[401]("Usuario no tiene permisos de acceso a este recurso");
                    }
                } else {
                    throw new HttpErrors[401]("El token no es válido");
                }
            } else {
                throw new HttpErrors[401]("No hay un token para esta solicitud");
            }
        }
    }
}
