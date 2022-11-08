import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Order, OrderRelations, User, Task, Service, Expense} from '../models';
import {UserRepository} from './user.repository';
import {TaskRepository} from './task.repository';
import {ServiceRepository} from './service.repository';
import {ExpenseRepository} from './expense.repository';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id,
  OrderRelations
> {

  public readonly users: HasManyRepositoryFactory<User, typeof Order.prototype.id>;

  public readonly tasks: HasManyRepositoryFactory<Task, typeof Order.prototype.id>;

  public readonly services: HasManyRepositoryFactory<Service, typeof Order.prototype.id>;

  public readonly expenses: HasManyRepositoryFactory<Expense, typeof Order.prototype.id>;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('TaskRepository') protected taskRepositoryGetter: Getter<TaskRepository>, @repository.getter('ServiceRepository') protected serviceRepositoryGetter: Getter<ServiceRepository>, @repository.getter('ExpenseRepository') protected expenseRepositoryGetter: Getter<ExpenseRepository>,
  ) {
    super(Order, dataSource);
    this.expenses = this.createHasManyRepositoryFactoryFor('expenses', expenseRepositoryGetter,);
    this.registerInclusionResolver('expenses', this.expenses.inclusionResolver);
    this.services = this.createHasManyRepositoryFactoryFor('services', serviceRepositoryGetter,);
    this.registerInclusionResolver('services', this.services.inclusionResolver);
    this.tasks = this.createHasManyRepositoryFactoryFor('tasks', taskRepositoryGetter,);
    this.registerInclusionResolver('tasks', this.tasks.inclusionResolver);
    this.users = this.createHasManyRepositoryFactoryFor('users', userRepositoryGetter,);
    this.registerInclusionResolver('users', this.users.inclusionResolver);
  }
}
