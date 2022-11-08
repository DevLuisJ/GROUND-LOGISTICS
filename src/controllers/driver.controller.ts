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
import {Driver} from '../models';
import {DriverRepository} from '../repositories';

export class DriverController {
  constructor(
    @repository(DriverRepository)
    public driverRepository : DriverRepository,
  ) {}

  @post('/drivers')
  @response(200, {
    description: 'Driver model instance',
    content: {'application/json': {schema: getModelSchemaRef(Driver)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Driver, {
            title: 'NewDriver',
            exclude: ['id'],
          }),
        },
      },
    })
    driver: Omit<Driver, 'id'>,
  ): Promise<Driver> {
    return this.driverRepository.create(driver);
  }

  @get('/drivers/count')
  @response(200, {
    description: 'Driver model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Driver) where?: Where<Driver>,
  ): Promise<Count> {
    return this.driverRepository.count(where);
  }

  @get('/drivers')
  @response(200, {
    description: 'Array of Driver model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Driver, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Driver) filter?: Filter<Driver>,
  ): Promise<Driver[]> {
    return this.driverRepository.find(filter);
  }

  @patch('/drivers')
  @response(200, {
    description: 'Driver PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Driver, {partial: true}),
        },
      },
    })
    driver: Driver,
    @param.where(Driver) where?: Where<Driver>,
  ): Promise<Count> {
    return this.driverRepository.updateAll(driver, where);
  }

  @get('/drivers/{id}')
  @response(200, {
    description: 'Driver model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Driver, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Driver, {exclude: 'where'}) filter?: FilterExcludingWhere<Driver>
  ): Promise<Driver> {
    return this.driverRepository.findById(id, filter);
  }

  @patch('/drivers/{id}')
  @response(204, {
    description: 'Driver PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Driver, {partial: true}),
        },
      },
    })
    driver: Driver,
  ): Promise<void> {
    await this.driverRepository.updateById(id, driver);
  }

  @put('/drivers/{id}')
  @response(204, {
    description: 'Driver PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() driver: Driver,
  ): Promise<void> {
    await this.driverRepository.replaceById(id, driver);
  }

  @del('/drivers/{id}')
  @response(204, {
    description: 'Driver DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.driverRepository.deleteById(id);
  }
}
