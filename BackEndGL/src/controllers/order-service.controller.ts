import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Order,
  Service,
} from '../models';
import {OrderRepository} from '../repositories';

export class OrderServiceController {
  constructor(
    @repository(OrderRepository) protected orderRepository: OrderRepository,
  ) { }

  @get('/orders/{id}/services', {
    responses: {
      '200': {
        description: 'Array of Order has many Service',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Service)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Service>,
  ): Promise<Service[]> {
    return this.orderRepository.services(id).find(filter);
  }

  @post('/orders/{id}/services', {
    responses: {
      '200': {
        description: 'Order model instance',
        content: {'application/json': {schema: getModelSchemaRef(Service)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Order.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Service, {
            title: 'NewServiceInOrder',
            exclude: ['id'],
            optional: ['orderId']
          }),
        },
      },
    }) service: Omit<Service, 'id'>,
  ): Promise<Service> {
    return this.orderRepository.services(id).create(service);
  }

  @patch('/orders/{id}/services', {
    responses: {
      '200': {
        description: 'Order.Service PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Service, {partial: true}),
        },
      },
    })
    service: Partial<Service>,
    @param.query.object('where', getWhereSchemaFor(Service)) where?: Where<Service>,
  ): Promise<Count> {
    return this.orderRepository.services(id).patch(service, where);
  }

  @del('/orders/{id}/services', {
    responses: {
      '200': {
        description: 'Order.Service DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Service)) where?: Where<Service>,
  ): Promise<Count> {
    return this.orderRepository.services(id).delete(where);
  }
}
