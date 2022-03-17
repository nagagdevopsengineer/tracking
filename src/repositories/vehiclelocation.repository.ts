import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TrackingDataSource} from '../datasources';
import {Vehiclelocation, VehiclelocationRelations} from '../models';

export class VehiclelocationRepository extends DefaultCrudRepository<
  Vehiclelocation,
  typeof Vehiclelocation.prototype.id,
  VehiclelocationRelations
> {
  constructor(
    @inject('datasources.tracking') dataSource: TrackingDataSource,
  ) {
    super(Vehiclelocation, dataSource);
  }
}
