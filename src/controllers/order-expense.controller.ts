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
  Expense,
} from '../models';
import {OrderRepository} from '../repositories';

export class OrderExpenseController {
  constructor(
    @repository(OrderRepository) protected orderRepository: OrderRepository,
  ) { }

  @get('/orders/{id}/expenses', {
    responses: {
      '200': {
        description: 'Array of Order has many Expense',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Expense)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Expense>,
  ): Promise<Expense[]> {
    return this.orderRepository.expenses(id).find(filter);
  }

  @post('/orders/{id}/expenses', {
    responses: {
      '200': {
        description: 'Order model instance',
        content: {'application/json': {schema: getModelSchemaRef(Expense)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Order.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expense, {
            title: 'NewExpenseInOrder',
            exclude: ['id'],
            optional: ['orderId']
          }),
        },
      },
    }) expense: Omit<Expense, 'id'>,
  ): Promise<Expense> {
    return this.orderRepository.expenses(id).create(expense);
  }

  @patch('/orders/{id}/expenses', {
    responses: {
      '200': {
        description: 'Order.Expense PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expense, {partial: true}),
        },
      },
    })
    expense: Partial<Expense>,
    @param.query.object('where', getWhereSchemaFor(Expense)) where?: Where<Expense>,
  ): Promise<Count> {
    return this.orderRepository.expenses(id).patch(expense, where);
  }

  @del('/orders/{id}/expenses', {
    responses: {
      '200': {
        description: 'Order.Expense DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Expense)) where?: Where<Expense>,
  ): Promise<Count> {
    return this.orderRepository.expenses(id).delete(where);
  }
}
