import {Entity, model, property} from '@loopback/repository';

@model()
export class Service extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  mobilityHour: number;

  @property({
    type: 'number',
    required: true,
  })
  mobilityRate: number;

  @property({
    type: 'number',
    required: true,
  })
  mileage: number;

  @property({
    type: 'number',
    required: true,
  })
  mileageRate: number;

  @property({
    type: 'string',
    required: true,
  })
  task: string;

  @property({
    type: 'string',
  })
  notes?: string;

  @property({
    type: 'string',
  })
  orderId?: string;

  constructor(data?: Partial<Service>) {
    super(data);
  }
}

export interface ServiceRelations {
  // describe navigational properties here
}

export type ServiceWithRelations = Service & ServiceRelations;
