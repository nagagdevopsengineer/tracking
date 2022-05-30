import {
    Count,
    CountSchema,
    Filter,
    FilterExcludingWhere,
    repository,
    Where
  } from '@loopback/repository';
  import {
    del,
    get,
    getModelSchemaRef,
    param,
    patch,
    post,
    put,
    requestBody,
    response
  } from '@loopback/rest';
  import {Employeelocation} from '../models/employeelocation.model';
  import {EmployeelocationRepository} from '../repositories/employeelocation.repository';
  
  export class VehicleLocationController {
    constructor(
      @repository(EmployeelocationRepository)
      public employeelocationRepository: EmployeelocationRepository,
    ) { }
  
    @post('/employeelocation')
    @response(200, {
      description: 'Employeelocation model instance',
      content: {'application/json': {schema: getModelSchemaRef(Employeelocation)}},
    })
    async create(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(Employeelocation, {
              title: 'Newemployeelocation',
              exclude: ['id'],
            }),
          },
        },
      })
      employeelocation: Omit<Employeelocation, 'id'>,
    ): Promise<Employeelocation> {
        console.log(employeelocation)
      return this.employeelocationRepository.create(employeelocation);
    }
  
   
  
    @get('/employeelocation')
    @response(200, {
      description: 'Array of Vehiclelocation model instances',
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

  
  }

  
  
  