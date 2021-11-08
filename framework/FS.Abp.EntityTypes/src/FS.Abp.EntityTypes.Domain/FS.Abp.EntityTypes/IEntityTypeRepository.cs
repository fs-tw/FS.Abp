using System;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace FS.Abp.EntityTypes
{

    public interface IEntityTypeRepository<TEntityType, TEntity>
        : IRepository<TEntityType>
        where TEntityType : class, IEntity
    {
    }

    public interface IEntityTypeRepository<TEntityType, TEntity, Tkey>
        : IRepository<TEntityType, Tkey>
        where TEntityType : class, IEntity<Tkey>
    {
    }
}
