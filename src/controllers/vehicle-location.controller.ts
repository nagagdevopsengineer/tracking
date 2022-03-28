import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Vehiclelocation} from '../models';
import {VehiclelocationRepository} from '../repositories';

export class VehicleLocationController {
  constructor(
    @repository(VehiclelocationRepository)
    public vehiclelocationRepository : VehiclelocationRepository,
  ) {}

  @post('/vehiclelocations')
  @response(200, {
    description: 'Vehiclelocation model instance',
    content: {'application/json': {schema: getModelSchemaRef(Vehiclelocation)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiclelocation, {
            title: 'NewVehiclelocation',
            exclude: ['id'],
          }),
        },
      },
    })
    vehiclelocation: Omit<Vehiclelocation, 'id'>,
  ): Promise<Vehiclelocation> {
    return this.vehiclelocationRepository.create(vehiclelocation);
  }

  @get('/vehiclelocations/count')
  @response(200, {
    description: 'Vehiclelocation model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Vehiclelocation) where?: Where<Vehiclelocation>,
  ): Promise<Count> {
    return this.vehiclelocationRepository.count(where);
  }

  @get('/vehiclelocations')
  @response(200, {
    description: 'Array of Vehiclelocation model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Vehiclelocation, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Vehiclelocation) filter?: Filter<Vehiclelocation>,
  ): Promise<Vehiclelocation[]> {
    return this.vehiclelocationRepository.find(filter);
  }

  @patch('/vehiclelocations')
  @response(200, {
    description: 'Vehiclelocation PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiclelocation, {partial: true}),
        },
      },
    })
    vehiclelocation: Vehiclelocation,
    @param.where(Vehiclelocation) where?: Where<Vehiclelocation>,
  ): Promise<Count> {
    return this.vehiclelocationRepository.updateAll(vehiclelocation, where);
  }

  @get('/vehiclelocations/{id}')
  @response(200, {
    description: 'Vehiclelocation model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Vehiclelocation, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: string,
    @param.filter(Vehiclelocation, {exclude: 'where'}) filter?: FilterExcludingWhere<Vehiclelocation>
  ): Promise<Vehiclelocation> {
    return this.vehiclelocationRepository.findById(id, filter);
  }

  @patch('/vehiclelocations/{id}')
  @response(204, {
    description: 'Vehiclelocation PATCH success',
  })
  async updateById(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Vehiclelocation, {partial: true}),
        },
      },
    })
    vehiclelocation: Vehiclelocation,
  ): Promise<void> {
    await this.vehiclelocationRepository.updateById(id, vehiclelocation);
  }

  @put('/vehiclelocations/{id}')
  @response(204, {
    description: 'Vehiclelocation PUT success',
  })
  async replaceById(
    @param.path.number('id') id: string,
    @requestBody() vehiclelocation: Vehiclelocation,
  ): Promise<void> {
    await this.vehiclelocationRepository.replaceById(id, vehiclelocation);
  }

  @del('/vehiclelocations/{id}')
  @response(204, {
    description: 'Vehiclelocation DELETE success',
  })
  async deleteById(@param.path.number('id') id: string): Promise<void> {
    await this.vehiclelocationRepository.deleteById(id);
  }

  @get('/vehicletrackingdetails')
  async vehicletrackingdetails(
    @param.query.number('tripid') tripid: number,
    @param.query.number('timestamp') timestamp: number) {
    let res;
    if (timestamp) {
      res = await this.vehiclelocationRepository.find({
        where: {tripId: tripid, timestamp: {gt: timestamp}},
        order: ['timestamp ASC'],
      });
    }
    else {
      res = await this.vehiclelocationRepository.find({
        where: {tripId: tripid},
        order: ['timestamp ASC'],
      });
    }

    return res;
  }
      });
    }

    return res;
  }

}



