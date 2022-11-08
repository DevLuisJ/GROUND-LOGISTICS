import {Entity, model, property, hasMany} from '@loopback/repository';
import {User} from './user.model';
import {Task} from './task.model';
import {Service} from './service.model';
import {Expense} from './expense.model';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  individualName: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  company: string;

  @property({
    type: 'string',
    required: true,
  })
  vessel: string;

  @property({
    type: 'boolean',
    required: true,
  })
  covid: boolean;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'number',
    required: true,
  })
  totalService: number;

  @property({
    type: 'number',
    required: true,
  })
  totalExpense: number;

  @property({
    type: 'number',
    required: true,
  })
  totalOrder: number;

  @hasMany(() => User)
  users: User[];

  @property({
    type: 'string',
  })
  userId?: string;

  @hasMany(() => Task)
  tasks: Task[];

  @hasMany(() => Service)
  services: Service[];

  @hasMany(() => Expense)
  expenses: Expense[];

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
