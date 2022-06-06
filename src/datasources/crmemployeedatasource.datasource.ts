import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  // name: 'crmemployeedatasource',
  // connector: 'rest',
  // baseURL: 'http://localhost',
  // crud: false

  "name": "crmemployeedatasource",
  "connector": "rest",
  "baseURL": 'http://localhost',
  "crud": false,
  "options": {
  "headers": {
  "accept": "application/json",
  "content-type": "application/json"
      }
    },
  "operations": [
      {
  "template": {
  "method": "GET",
  "url": "http://localhost:1337/api/trips/employeeracking/{tripId}/{lat}/{long}"
        },
  "functions": {
  "employeeTracking": ["tripId","lat","long"]
        }
      }
    ]
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CrmemployeedatasourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'crmemployeedatasource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.crmemployeedatasource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
