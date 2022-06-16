import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {CrmrestdatasourceDataSource} from '../datasources';

export interface CrmService {
  // this is where you define the Node.js methods that will be
  // mapped to the SOAP operations as stated in the datasource
  // json file.
  busTracking(tripId: number, lat: number, long: number): Promise<Trip>;
}

export class CrmServiceProvider implements Provider<CrmService> {
  constructor(
    // restds must match the name property in the datasource json file
    @inject('datasources.crmrestdatasource')
    protected dataSource: CrmrestdatasourceDataSource = new CrmrestdatasourceDataSource(),
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
