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
import {Companyvessel} from '../models';
import {CompanyvesselRepository} from '../repositories';

export class CompanyvesselController {
  constructor(
    @repository(CompanyvesselRepository)
    public companyvesselRepository : CompanyvesselRepository,
  ) {}

  @post('/companyvessels')
  @response(200, {
    description: 'Companyvessel model instance',
    content: {'application/json': {schema: getModelSchemaRef(Companyvessel)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Companyvessel, {
            title: 'NewCompanyvessel',
            exclude: ['id'],
          }),
        },
      },
    })
    companyvessel: Omit<Companyvessel, 'id'>,
  ): Promise<Companyvessel> {
    return this.companyvesselRepository.create(companyvessel);
  }

  @get('/companyvessels/count')
  @response(200, {
    description: 'Companyvessel model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Companyvessel) where?: Where<Companyvessel>,
  ): Promise<Count> {
    return this.companyvesselRepository.count(where);
  }

  @get('/companyvessels')
  @response(200, {
    description: 'Array of Companyvessel model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Companyvessel, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Companyvessel) filter?: Filter<Companyvessel>,
  ): Promise<Companyvessel[]> {
    return this.companyvesselRepository.find(filter);
  }

  @patch('/companyvessels')
  @response(200, {
    description: 'Companyvessel PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Companyvessel, {partial: true}),
        },
      },
    })
    companyvessel: Companyvessel,
    @param.where(Companyvessel) where?: Where<Companyvessel>,
  ): Promise<Count> {
    return this.companyvesselRepository.updateAll(companyvessel, where);
  }

  @get('/companyvessels/{id}')
  @response(200, {
    description: 'Companyvessel model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Companyvessel, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Companyvessel, {exclude: 'where'}) filter?: FilterExcludingWhere<Companyvessel>
  ): Promise<Companyvessel> {
    return this.companyvesselRepository.findById(id, filter);
  }

  @patch('/companyvessels/{id}')
  @response(204, {
    description: 'Companyvessel PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Companyvessel, {partial: true}),
        },
      },
    })
    companyvessel: Companyvessel,
  ): Promise<void> {
    await this.companyvesselRepository.updateById(id, companyvessel);
  }

  @put('/companyvessels/{id}')
  @response(204, {
    description: 'Companyvessel PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() companyvessel: Companyvessel,
  ): Promise<void> {
    await this.companyvesselRepository.replaceById(id, companyvessel);
  }

  @del('/companyvessels/{id}')
  @response(204, {
    description: 'Companyvessel DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.companyvesselRepository.deleteById(id);
  }
}
