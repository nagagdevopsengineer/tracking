import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'tracking',
  connector: 'mongodb',
  url: '',
  host: '3.7.138.38',
  port: 27017,
  user: 'arrivm',
  password: 'password123',
  database: 'admin',
  useNewUrlParser: true,
};

@lifeCycleObserver('datasource')
export class TrackingDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'tracking';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.tracking', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
