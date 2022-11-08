import {Model, model, property} from '@loopback/repository';

@model()
export class ChangePass extends Model {
  @property({
    type: 'string',
    required: true,
  })
  currentPass: string;

  @property({
    type: 'string',
    required: true,
  })
  newPass: string;

  @property({
    type: 'string',
    required: true,
  })
  confirmPass: string;


  constructor(data?: Partial<ChangePass>) {
    super(data);
  }
}

export interface ChangePassRelations {
  // describe navigational properties here
}

export type ChangePassWithRelations = ChangePass & ChangePassRelations;
