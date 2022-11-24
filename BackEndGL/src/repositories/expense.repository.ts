import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Expense, ExpenseRelations} from '../models';

export class ExpenseRepository extends DefaultCrudRepository<
  Expense,
  typeof Expense.prototype.id,
  ExpenseRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Expense, dataSource);
  }
}
