import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
// import {CrmrestdatasourceDataSource} from '../datasources';
import {CrmemployeedatasourceDataSource} from '../datasources/crmemployeedatasource.datasource'

export interface CrmService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  employeeTracking(tripId: number, lat: number, long: number): Promise<Trip>;
}

export class CrmServiceProvider implements Provider<CrmService> {
  constructor(
    // restds must match the name property in the datasource json file
    @inject('datasources.crmemployeedatasource')
    protected dataSource: CrmemployeedatasourceDataSource = new CrmemployeedatasourceDataSource(),
  ) { }

  value(): Promise<CrmService> {
    return getService(this.dataSource);
  }
}

export interface Trip {
  tripId: number;
  lat: number;
  long: number;
}
