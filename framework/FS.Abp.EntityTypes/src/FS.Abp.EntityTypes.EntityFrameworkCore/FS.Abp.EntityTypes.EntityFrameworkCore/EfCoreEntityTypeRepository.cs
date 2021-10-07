using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using Volo.CmsKit;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using System.Linq.Dynamic.Core;

namespace FS.Abp.EntityTypes.EntityFrameworkCore
{
    public class EfCoreEntityTypeRepository<TDbContext, TEntityType, TEntity>
        : EfCoreRepository<TDbContext, TEntityType>,
        IEntityTypeRepository<TEntityType, TEntity>
        where TDbContext : IEfCoreDbContext
        where TEntityType : class, IEntity
    {
        protected IOptions<EntityTypeOption> Options => LazyServiceProvider.LazyGetRequiredService<IOptions<EntityTypeOption>>();
        public EfCoreEntityTypeRepository(
            IDbContextProvider<TDbContext> dbContextProvider) : base(dbContextProvider) { }

        public override async Task<List<TEntityType>> GetListAsync(bool includeDetails = false, CancellationToken cancellationToken = default)
        {
            return includeDetails
                ? await (await WithDetailsAsync()).Where(entityTypePredicate).ToListAsync(GetCancellationToken(cancellationToken))
                : await (await GetDbSetAsync()).Where(entityTypePredicate).ToListAsync(GetCancellationToken(cancellationToken));
        }


        public override async Task<List<TEntityType>> GetListAsync(Expression<Func<TEntityType, bool>> predicate, bool includeDetails = false, CancellationToken cancellationToken = default)
        {
            return includeDetails
                ? await (await WithDetailsAsync()).Where(predicate.And(entityTypePredicate)).ToListAsync(GetCancellationToken(cancellationToken))
                : await (await GetDbSetAsync()).Where(predicate.And(entityTypePredicate)).ToListAsync(GetCancellationToken(cancellationToken));
        }

        public override async Task<long> GetCountAsync(CancellationToken cancellationToken = default)
        {
            return await (await GetDbSetAsync()).Where(entityTypePredicate).LongCountAsync(GetCancellationToken(cancellationToken));
        }

        public override async Task<List<TEntityType>> GetPagedListAsync(
            int skipCount,
            int maxResultCount,
            string sorting,
            bool includeDetails = false,
            CancellationToken cancellationToken = default)
        {
            var queryable = includeDetails
                ? await WithDetailsAsync()
                : (await GetDbSetAsync()).Where(entityTypePredicate);

            return await queryable
                .OrderBy(sorting)
                .PageBy(skipCount, maxResultCount)
                .ToListAsync(GetCancellationToken(cancellationToken));
        }

        public override async Task<IQueryable<TEntityType>> GetQueryableAsync()
        {
            return (await base.GetQueryableAsync()).Where(entityTypePredicate);
        }

        public override Task<TEntityType> FindAsync(Expression<Func<TEntityType, bool>> predicate, bool includeDetails = true, CancellationToken cancellationToken = default)
        {
            return base.FindAsync(entityTypePredicate.And(predicate), includeDetails, cancellationToken);
        }

        public override async Task DeleteAsync(Expression<Func<TEntityType, bool>> predicate, bool autoSave = false, CancellationToken cancellationToken = default)
        {
            await base.DeleteAsync(entityTypePredicate.And(predicate), autoSave, cancellationToken);
        }

        public override async Task<IQueryable<TEntityType>> WithDetailsAsync()
        {
            if (AbpEntityOptions.DefaultWithDetailsFunc == null)
            {
                return (await base.WithDetailsAsync()).Where(entityTypePredicate);
            }

            return AbpEntityOptions.DefaultWithDetailsFunc(await GetQueryableAsync());
        }

        protected override void CheckAndSetId(TEntityType entity)
        {
            EntityTypeDefinition foo = null;

            var entityType = Options.Value.GetOrNull<TEntityType>().Get<TEntity>().EntityType;
            ObjectHelper.TrySetProperty(entity,
                (e) => foo.EntityType,
                () => entityType);

            base.CheckAndSetId(entity);
        }

        protected Expression<Func<TEntityType, bool>> entityTypePredicate
        {
            get
            {
                var entityType = Options.Value.GetOrNull<TEntityType>().Get<TEntity>().EntityType;
                Expression<Func<TEntityType, bool>> entityTypePredicate = e => EF.Property<string>(e, nameof(EntityTypeDefinition.EntityType)) == entityType;
                return entityTypePredicate;
            }
        }

    }


    public class EfCoreEntityTypeRepository<TDbContext, TEntityType, TEntity, TKey> :
        EfCoreEntityTypeRepository<TDbContext, TEntityType, TEntity>,
        IEntityTypeRepository<TEntityType, TEntity, TKey>,
        IEfCoreRepository<TEntityType, TKey>
        where TDbContext : IEfCoreDbContext
        where TEntityType : class, IEntity<TKey>
    {
        public EfCoreEntityTypeRepository(IDbContextProvider<TDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        public virtual async Task<TEntityType> GetAsync(TKey id, bool includeDetails = true, CancellationToken cancellationToken = default)
        {
            var entity = await FindAsync(id, includeDetails, GetCancellationToken(cancellationToken));

            if (entity == null)
            {
                throw new EntityNotFoundException(typeof(TEntity), id);
            }

            return entity;
        }

        public virtual async Task<TEntityType> FindAsync(TKey id, bool includeDetails = true, CancellationToken cancellationToken = default)
        {
            return await base.FindAsync(x => x.Id.Equals(id), includeDetails, cancellationToken);
        }

        public virtual async Task DeleteAsync(TKey id, bool autoSave = false, CancellationToken cancellationToken = default)
        {
            await base.DeleteAsync(x => x.Id.Equals(id), autoSave, cancellationToken);
        }

        public virtual async Task DeleteManyAsync(IEnumerable<TKey> ids, bool autoSave = false, CancellationToken cancellationToken = default)
        {
            cancellationToken = GetCancellationToken(cancellationToken);

            var entities = await (await GetDbSetAsync()).Where(entityTypePredicate).Where(x => ids.Contains(x.Id)).ToListAsync(cancellationToken);

            await DeleteManyAsync(entities, autoSave, cancellationToken);
        }
    }
}
