import {inject} from '@loopback/context';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Employeelocation} from '../models/employeelocation.model';
import {EmployeelocationRepository} from '../repositories/employeelocation.repository';
import {CrmService} from '../services/crmemployeedatasource.service';

export class EmployeeLocationController {
  constructor(
    @repository(EmployeelocationRepository)
    public employeelocationRepository : EmployeelocationRepository,
    @inject('services.CrmService')
    protected crmService: CrmService,
  ) {}

  @post('/employeelocations')
  @response(200, {
    description: 'Employeelocation model instance',
    content: {'application/json': {schema: getModelSchemaRef(Employeelocation)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employeelocation, {
            title: 'NewEmployeelocation',
            exclude: ['id'],
          }),
        },
      },
    })
    employeelocation: Omit<Employeelocation, 'id'>,
  ): Promise<Employeelocation> {
    // TO DO
    // try {
    //   this.crmService.employeeTracking(employeelocation.tripId,
    //     employeelocation.latitude, employeelocation.longitude);
    // } catch (error: any) {
    //   console.log(" error ", error);
    // }
    // console.log("EMPLOYEE LOCATION", employeelocation)
    return this.employeelocationRepository.create(employeelocation);
  }

  @get('/employeelocations/count')
  @response(200, {
    description: 'Employeelocation model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Employeelocation) where?: Where<Employeelocation>,
  ): Promise<Count> {
    return this.employeelocationRepository.count(where);
  }

  @get('/employeelocations')
  @response(200, {
    description: 'Array of Employeelocation model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Employeelocation, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Employeelocation) filter?: Filter<Employeelocation>,
  ): Promise<Employeelocation[]> {
    return this.employeelocationRepository.find(filter);
  }

  @patch('/employeelocations')
  @response(200, {
    description: 'Employeelocation PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employeelocation, {partial: true}),
        },
      },
    })
    employeelocation: Employeelocation,
    @param.where(Employeelocation) where?: Where<Employeelocation>,
  ): Promise<Count> {
    return this.employeelocationRepository.updateAll(employeelocation, where);
  }

  @get('/employeelocations/{id}')
  @response(200, {
    description: 'Employeelocation model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Employeelocation, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Employeelocation, {exclude: 'where'}) filter?: FilterExcludingWhere<Employeelocation>
  ): Promise<Employeelocation> {
    return this.employeelocationRepository.findById(id, filter);
  }

  @patch('/employeelocations/{id}')
  @response(204, {
    description: 'Employeelocation PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employeelocation, {partial: true}),
        },
      },
    })
    employeelocation: Employeelocation,
  ): Promise<void> {
    await this.employeelocationRepository.updateById(id, employeelocation);
  }

  @put('/employeelocations/{id}')
  @response(204, {
    description: 'Employeelocation PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() employeelocation: Employeelocation,
  ): Promise<void> {
    await this.employeelocationRepository.replaceById(id, employeelocation);
  }

  @del('/employeelocations/{id}')
  @response(204, {
    description: 'Employeelocation DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.employeelocationRepository.deleteById(id);
  }
}
