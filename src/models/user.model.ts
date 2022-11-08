import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order} from './order.model';
import {Role} from './role.model';
import {UserRole} from './user-role.model';

@model()
export class User extends Entity {
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
  identification: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  phoneNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  emailAddress: string;

  @property({
    type: 'string',
    required: true,
  })
  password?: string;

  @property({
    type: 'string',
    required: true,
  })
  perfil?: string;

  @property({
    type: 'string',
  })
  orderId?: string;

  @hasMany(() => Order)
  orders: Order[];

  @hasMany(() => Role, {through: {model: () => UserRole}})
  roles: Role[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
