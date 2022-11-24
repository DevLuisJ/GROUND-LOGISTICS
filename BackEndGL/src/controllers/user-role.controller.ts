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
} from '@loopback/rest';
import {UserRole} from '../models';
import {UserRoleRepository} from '../repositories';

export class UserRoleController {
  constructor(
    @repository(UserRoleRepository)
    public userRoleRepository : UserRoleRepository,
  ) {}

  @post('/user-roles')
  @response(200, {
    description: 'UserRole model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserRole)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserRole, {
            title: 'NewUserRole',
            exclude: ['id'],
          }),
        },
      },
    })
    userRole: Omit<UserRole, 'id'>,
  ): Promise<UserRole> {
    return this.userRoleRepository.create(userRole);
  }

  @get('/user-roles/count')
  @response(200, {
    description: 'UserRole model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UserRole) where?: Where<UserRole>,
  ): Promise<Count> {
    return this.userRoleRepository.count(where);
  }

  @get('/user-roles')
  @response(200, {
    description: 'Array of UserRole model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserRole, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserRole) filter?: Filter<UserRole>,
  ): Promise<UserRole[]> {
    return this.userRoleRepository.find(filter);
  }

  @patch('/user-roles')
  @response(200, {
    description: 'UserRole PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserRole, {partial: true}),
        },
      },
    })
    userRole: UserRole,
    @param.where(UserRole) where?: Where<UserRole>,
  ): Promise<Count> {
    return this.userRoleRepository.updateAll(userRole, where);
  }

  @get('/user-roles/{id}')
  @response(200, {
    description: 'UserRole model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserRole, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UserRole, {exclude: 'where'}) filter?: FilterExcludingWhere<UserRole>
  ): Promise<UserRole> {
    return this.userRoleRepository.findById(id, filter);
  }

  @patch('/user-roles/{id}')
  @response(204, {
    description: 'UserRole PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserRole, {partial: true}),
        },
      },
    })
    userRole: UserRole,
  ): Promise<void> {
    await this.userRoleRepository.updateById(id, userRole);
  }

  @put('/user-roles/{id}')
  @response(204, {
    description: 'UserRole PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() userRole: UserRole,
  ): Promise<void> {
    await this.userRoleRepository.replaceById(id, userRole);
  }

  @del('/user-roles/{id}')
  @response(204, {
    description: 'UserRole DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userRoleRepository.deleteById(id);
  }
}
