import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {User, UserRelations, Order, Role, UserRole} from '../models';
import {OrderRepository} from './order.repository';
import {UserRoleRepository} from './user-role.repository';
import {RoleRepository} from './role.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly orders: HasManyRepositoryFactory<Order, typeof User.prototype.id>;

  public readonly roles: HasManyThroughRepositoryFactory<Role, typeof Role.prototype.id,
          UserRole,
          typeof User.prototype.id
        >;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('OrderRepository') protected orderRepositoryGetter: Getter<OrderRepository>, @repository.getter('UserRoleRepository') protected userRoleRepositoryGetter: Getter<UserRoleRepository>, @repository.getter('RoleRepository') protected roleRepositoryGetter: Getter<RoleRepository>,
  ) {
    super(User, dataSource);
    this.roles = this.createHasManyThroughRepositoryFactoryFor('roles', roleRepositoryGetter, userRoleRepositoryGetter,);
    this.registerInclusionResolver('roles', this.roles.inclusionResolver);
    this.orders = this.createHasManyRepositoryFactoryFor('orders', orderRepositoryGetter,);
    this.registerInclusionResolver('orders', this.orders.inclusionResolver);
  }
}
