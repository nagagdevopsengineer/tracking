import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CurrentState extends Model {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CurrentState>) {
    super(data);
  }
}

export interface CurrentStateRelations {
  // describe navigational properties here
}

export type CurrentStateWithRelations = CurrentState & CurrentStateRelations;
