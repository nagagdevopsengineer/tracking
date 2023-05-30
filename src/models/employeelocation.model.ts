import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Employeelocation extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  tripId: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  employeeid: number;

  @property({
    type: 'number',
  })
  longitude?: number;

  @property({
    type: 'number',
  })
  latitude?: number;

  @property({
    type: 'number',
  })
  speed?: number;

  @property({
    type: 'number',
  })
  altitude?: number;

  @property({
    type: 'number',
  })
  timestamp?: number;
  @property({
    type: 'number',
    required: true,
  })
  header: number;

  @property({
    type: 'number',
    required: true,
  })
  angle: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Employeelocation>) {
    super(data);
  }
}

export interface EmployeelocationRelations {
  // describe navigational properties here
}

export type EmployeelocationWithRelations = Employeelocation & EmployeelocationRelations;
