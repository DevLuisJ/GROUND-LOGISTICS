import {Entity, model, property} from '@loopback/repository';

@model()
export class Rates extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
  })
  mRegularRate?: number;

  @property({
    type: 'number',
  })
  mCovidRate?: number;

  @property({
    type: 'number',
  })
  mileageRate?: number;


  constructor(data?: Partial<Rates>) {
    super(data);
  }
}

export interface RatesRelations {
  // describe navigational properties here
}

export type RatesWithRelations = Rates & RatesRelations;
