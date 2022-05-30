import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EmployeeDataSource} from '../datasources/employee.datasource';
import {Employeelocation, EmployeelocationRelations} from '../models/employeelocation.model';

export class EmployeelocationRepository extends DefaultCrudRepository<
  Employeelocation,
  typeof Employeelocation.prototype.id,
  EmployeelocationRelations
> {
  constructor(
    @inject('datasources.employee') dataSource: EmployeeDataSource,
  ) {
    super(Employeelocation, dataSource);
  }
}
