import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Companyvessel, CompanyvesselRelations} from '../models';

export class CompanyvesselRepository extends DefaultCrudRepository<
  Companyvessel,
  typeof Companyvessel.prototype.id,
  CompanyvesselRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Companyvessel, dataSource);
  }
}
