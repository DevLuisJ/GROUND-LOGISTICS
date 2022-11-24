import {Entity, model, property} from '@loopback/repository';

@model()
export class Companyvessel extends Entity {
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
  company: string;

  @property({
    type: 'string',
    required: true,
  })
  vessel: string;


  constructor(data?: Partial<Companyvessel>) {
    super(data);
  }
}

export interface CompanyvesselRelations {
  // describe navigational properties here
}

export type CompanyvesselWithRelations = Companyvessel & CompanyvesselRelations;
