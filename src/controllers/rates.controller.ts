import { authenticate } from '@loopback/authentication';
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
import {Rates} from '../models';
import {RatesRepository} from '../repositories';

/** Aplique la autenticación para todo el recurso */
@authenticate("Admin")

export class RatesController {
  constructor(
    @repository(RatesRepository)
    public ratesRepository : RatesRepository,
  ) {}

  /**
   * Se utiliza 
   * @authenticate.skip()
   * para que al método que se aplique no aplique la estratégia de autenticación
   */

  @post('/rates')
  @response(200, {
    description: 'Rates model instance',
    content: {'application/json': {schema: getModelSchemaRef(Rates)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rates, {
            title: 'NewRates',
            exclude: ['id'],
          }),
        },
      },
    })
    rates: Omit<Rates, 'id'>,
  ): Promise<Rates> {
    return this.ratesRepository.create(rates);
  }

  @get('/rates/count')
  @response(200, {
    description: 'Rates model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Rates) where?: Where<Rates>,
  ): Promise<Count> {
    return this.ratesRepository.count(where);
  }

  @get('/rates')
  @response(200, {
    description: 'Array of Rates model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rates, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Rates) filter?: Filter<Rates>,
  ): Promise<Rates[]> {
    return this.ratesRepository.find(filter);
  }

  @patch('/rates')
  @response(200, {
    description: 'Rates PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rates, {partial: true}),
        },
      },
    })
    rates: Rates,
    @param.where(Rates) where?: Where<Rates>,
  ): Promise<Count> {
    return this.ratesRepository.updateAll(rates, where);
  }

  @get('/rates/{id}')
  @response(200, {
    description: 'Rates model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rates, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Rates, {exclude: 'where'}) filter?: FilterExcludingWhere<Rates>
  ): Promise<Rates> {
    return this.ratesRepository.findById(id, filter);
  }

  @patch('/rates/{id}')
  @response(204, {
    description: 'Rates PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rates, {partial: true}),
        },
      },
    })
    rates: Rates,
  ): Promise<void> {
    await this.ratesRepository.updateById(id, rates);
  }

  @put('/rates/{id}')
  @response(204, {
    description: 'Rates PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rates: Rates,
  ): Promise<void> {
    await this.ratesRepository.replaceById(id, rates);
  }

  @del('/rates/{id}')
  @response(204, {
    description: 'Rates DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ratesRepository.deleteById(id);
  }
}
