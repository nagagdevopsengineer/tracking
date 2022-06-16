import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  // name: 'crmrestdatasource',
  // connector: 'rest',
  // baseURL: 'http://localhost',
  // crud: false
  
    "name": "crmrestdatasource",
    "connector": "rest",
    "baseURL": 'http://dev-crmcontent.vapprtech.com/api',
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
    "url": "http://dev-crmcontent.vapprtech.com/api/trips/bustracking/{tripId}/{lat}/{long}"
          },
    "functions": {
    "busTracking": ["tripId","lat","long"]
          }
        }
      ]
    
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CrmrestdatasourceDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'crmrestdatasource';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.crmrestdatasource', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
