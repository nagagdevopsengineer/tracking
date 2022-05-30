import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'employee',
  connector: 'mongodb',
  url: '',
  host: '65.0.139.196',
  port: 27017,
  user: 'trackingapp',
  password: 'arrivnow123',
  database: 'employeelocation',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class EmployeeDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'employee';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.employee', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
