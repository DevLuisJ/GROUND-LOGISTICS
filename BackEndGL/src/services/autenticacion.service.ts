import { injectable, /* inject, */ BindingScope } from '@loopback/core';
import { repository } from "@loopback/repository";
import { Credenciales, User } from '../models';
import { UserRepository } from '../repositories';
import { Keys } from '../configuracion/Keys';
const generadorPassword = require("generate-password");
const cryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

@injectable({ scope: BindingScope.TRANSIENT })
export class AutenticacionService {
  constructor(
    @repository(UserRepository)
    public repositorioUser: UserRepository
  ) { }

  GenerarPassword() {
    let password = generadorPassword.generate({
      length: 10,
      numbers: true
    });
    return password;
  }

  EncriptarPassword(password: string) {
    let passwordE = cryptoJS.MD5(password);
    return passwordE;
  }
  ///
  IdentificarUsuario(credenciales: Credenciales) {
    try {
      let u = this.repositorioUser.findOne({
        where: {
          emailAddress: credenciales.usuario,
          password: credenciales.password
        }, include: ['roles']
      });
      if (u) {
        return u;
      }
      return false;
    } catch {
      return false;
    }
  }
  GeneracionToken(u: User) {
    let token = JWT.sign({
      data: {
        id: u.id,
        correo: u.emailAddress,
        nombre: u.name + " " + u.lastName,
        rol: [u.roles]
      }
    },
      Keys.LlaveJWT);

    return token;
  }
  ValidarToken(token: string) {
    try {
      let datos = JWT.verify(token, Keys.LlaveJWT);
      return datos;
    } catch {
      return false;

    }
  }

  ///
}
