import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Rates, RatesRelations} from '../models';

export class RatesRepository extends DefaultCrudRepository<
  Rates,
  typeof Rates.prototype.id,
  RatesRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Rates, dataSource);
  }
}
