import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import { UserRepository, DriverRepository } from '../repositories';
import {Credenciales, User, ChangePass} from '../models';
import { AutenticacionService } from '../services';
import { Keys } from '../configuracion/Keys';
const fetch = require("node-fetch");

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @service(AutenticacionService)
    public servicioautenticacion: AutenticacionService,
    /** Se agrega repositorio para driver porque un perfil es de driver, con su variable de inicialización */
    @repository(DriverRepository)
    public DriverRepo: DriverRepository
  ) { }

  @post('/Register')
  @response(200, {
    description: 'User model instance',
    content: { 'application/json': { schema: getModelSchemaRef(User) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUser',
            exclude: ['id'],
          }),
        },
      },
    })
    user: Omit<User, 'id'>,
  ): Promise<User> {

    let password = this.servicioautenticacion.GenerarPassword();
    let passwordEncrip = this.servicioautenticacion.EncriptarPassword(password);
    console.log(`Clave  ${password}`);
    console.log(`Clave cifrada  ${passwordEncrip}`);

    user.password = passwordEncrip;
    // Crea usuario en base de datos user
    let u = await this.userRepository.create(user);
    // Si es Driver crea usuario tambien en  base de datos Driver
    if (user.perfil == "Driver") {
      let d = await this.DriverRepo.create(user);
    } else if (user.perfil == "Driver") {
      let d = await this.DriverRepo.create(user);
    }
    // Notificación
    let destino = u.emailAddress;
    let asunto = 'Registro en la APP -Ground-Logistics';
    let contenido = `Hola, ${u.name}, su nombre de usuario es: ${u.emailAddress} y su contraseña
     de accesso a nuestra app es: ${password}`;
    fetch(`${Keys.urlNotificaciones}/e-mail?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
      .then((data: any) => {
        console.log(data);
      });

    return u;
  }

  @get('/users/count')
  @response(200, {
    description: 'User model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(User) where?: Where<User>,
  ): Promise<Count> {
    return this.userRepository.count(where);
  }

  @get('/users')
  @response(200, {
    description: 'Array of User model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(User, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(User) filter?: Filter<User>,
  ): Promise<User[]> {
    return this.userRepository.find(filter);
  }

  @patch('/users')
  @response(200, {
    description: 'User PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, { partial: true }),
        },
      },
    })
    user: User,
    @param.where(User) where?: Where<User>,
  ): Promise<Count> {
    return this.userRepository.updateAll(user, where);
  }

  @get('/users/{id}')
  @response(200, {
    description: 'User model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(User, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(User, { exclude: 'where' }) filter?: FilterExcludingWhere<User>
  ): Promise<User> {
    return this.userRepository.findById(id, filter);
  }

  @patch('/users/{id}')
  @response(204, {
    description: 'User PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, { partial: true }),
        },
      },
    })
    user: User,
  ): Promise<void> {
    await this.userRepository.updateById(id, user);
  }

  @put('/users/{id}')
  @response(204, {
    description: 'User PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() user: User,
  ): Promise<void> {
    await this.userRepository.replaceById(id, user);
  }

  @del('/users/{id}')
  @response(204, {
    description: 'User DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userRepository.deleteById(id);
  }

  /**
   * Metodos propios
   */
  @post('/Login', {
    responses: {
      '200': {
        description: "Identificacion de los users"
      }
    }
  })
  async identificar(
    @requestBody() credenciales: Credenciales
  ): Promise<User | null> {
    let clavecifrada = this.servicioautenticacion.EncriptarPassword(credenciales.password);
    console.log(`Clave cifrada ${clavecifrada}`);
    let user = await this.userRepository.findOne({
      where: {
        emailAddress: credenciales.usuario,
        password: clavecifrada
      }
    });
    return user;
  }

  @post('/LoginT')
  @response(200, {
    description: "Identificacion de usuarios con generacion de Token"
  })
  async identificarT(
    @requestBody() credenciales: Credenciales
  ) {
    console.log(`Clave ${credenciales.password}`);
    credenciales.password = this.servicioautenticacion.EncriptarPassword(credenciales.password);
    console.log(`Clave cifrada ${credenciales.password}`);
    let u = await this.servicioautenticacion.IdentificarUsuario(credenciales);
    if (u) {
      let token = this.servicioautenticacion.GeneracionToken(u);
      return {
        datos: {
          nombre: u.name,
          id: u.id
        },
        tk: token
      }
    } else {
      throw new HttpErrors[401]("Datos invalidos!");
    }

  }

  //Se construye el metodo mediante el post

  @post('/Recuperar-contraseña')
  @response(200, {
    description: "Recuperación contraseña del usuario"
  })
  async recuperar(
    @requestBody() email: string
  ): Promise<Boolean> {
    let usuario = await this.userRepository.findOne({
      where: {
        emailAddress: email
      }
    });
    if (usuario) {
      let password = this.servicioautenticacion.GenerarPassword();
      let passwordEncrip = this.servicioautenticacion.EncriptarPassword(password);
      console.log(`Clave  ${password}`);
      console.log(`Clave cifrada  ${passwordEncrip}`);
      usuario.password = passwordEncrip;

      // Actualiza la clave del  usuario en base de datos
      await this.userRepository.updateById(usuario.id, usuario);

      //Notificar al usuario el cambio de contraseña
      let destino = usuario.emailAddress;
      let asunto = 'Recuperación de la contraseñaen en su  APP -Ground-Logistics';
      let contenido = `Hola, ${usuario.name}, su nombre de usuario es: ${usuario.emailAddress} y se ha realizado una recuperación de contraseña de accesso a nuestra app, la cual es : ${password}`;
      fetch(`${Keys.urlNotificaciones}/e-mail?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
        .then((data: any) => {
          console.log(data);
        });
      console.log("se ha enviado la nueva contraseña al usuario");
      return true;
    } else {
      console.log("El usuario no fue encontrado")
      return false;
    }
  }

  @post('/ModificarPass')
  @response(200, {
    description: "Modificar clave del usuario"
  })
  async modificar(
    @requestBody() datos: ChangePass
  ): Promise<Boolean> {
    let usuario = await this.userRepository.findOne({
      where: {
        password: this.servicioautenticacion.EncriptarPassword(datos.currentPass)
      }
    });
    if (usuario) {
      if (datos.currentPass == datos.confirmPass) {
        usuario.password = this.servicioautenticacion.EncriptarPassword(datos.currentPass);
        await this.userRepository.updateById(usuario.id, usuario);
        //Notificar cambio de contraseña
        let destino = usuario.emailAddress;
        let asunto = 'Modificación de la contraseña en la APP -Ground-Logistics';
        let contenido = `Hola, ${usuario.name}, usted ha realizado el cambio de contraseña. Su nueva contraseña es: ${datos.newPass}`;
        fetch(`${Keys.urlNotificaciones}/e-mail?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
          .then((data: any) => {
            console.log(data);
          });
        // siga al siguiente link para modificarla: http://google.com`;
        console.log("El cambio de contraseña fue exitoso");
        return true;
      } else {
        console.log("las contraseñas no coinciden")
        return false
      }
    } else {
      console.log("El usuario no existe en la BD");
      return false;
    }
  }

}
