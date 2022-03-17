import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Vehiclelocation extends Entity {
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
  vehicleid: number;

  @property({
    type: 'number',
    required: true,
  })
  longitude: number;

  @property({
    type: 'number',
    required: true,
  })
  latitude: number;

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
    required: true,
  })
  timestamp: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vehiclelocation>) {
    super(data);
  }
}

export interface VehiclelocationRelations {
  // describe navigational properties here
}

export type VehiclelocationWithRelations = Vehiclelocation & VehiclelocationRelations;
