﻿using FS.Abp.Zero.Application;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;
using Volo.Abp.MultiTenancy;

namespace FS.Abp.Application.Services
{
    public class CrudAppService<TEntity, TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        : BaseCrudAppService<TEntity, TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>,
        FS.Abp.Application.Services.ICrudAppService<TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        where TEntity : class, IEntity<TKey>
        where TGetOutputDto : IEntityDto<TKey>
        where TGetListOutputDto : IEntityDto<TKey>
    {
        protected new IRepository<TEntity,TKey> Repository { get; }
        public CrudAppService(IRepository<TEntity,TKey> repository)
            : base(repository) { }

        public async Task<TGetOutputDto> GetAsync(TKey id)
        {
            await CheckGetPolicyAsync().ConfigureAwait(false);

            var entity = await GetEntityByIdAsync(id).ConfigureAwait(false);

            return MapToDto<TGetOutputDto>(entity);
        }

    }

    public class CrudAppService<TEntity, TGetOutputDto, TGetListOutputDto, TKey, TFind, TGetListInput, TCreateInput, TUpdateInput>
            : BaseCrudAppService<TEntity, TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>,
            FS.Abp.Application.Services.ICrudAppService<TGetOutputDto, TGetListOutputDto, TKey, TFind, TGetListInput, TCreateInput, TUpdateInput>
            where TEntity : class, IEntity
            where TGetOutputDto : IEntityDto
            where TGetListOutputDto : IEntityDto
    {
        public CrudAppService(IRepository<TEntity> repository)
            : base(repository) { }

        public async Task<TGetOutputDto> GetFindAsync(TFind key)
        {
            await CheckGetPolicyAsync().ConfigureAwait(false);

            var entity = await GetEntityByIdAsync(key).ConfigureAwait(false);

            return MapToDto<TGetOutputDto>(entity);

        }

    }

    public abstract class BaseCrudAppService<TEntity, TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        : Volo.Abp.Application.Services.ApplicationService,
        FS.Abp.Application.Services.IBaseCrudAppService<TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        where TEntity : class, IEntity
        where TGetOutputDto : IEntityDto
        where TGetListOutputDto : IEntityDto
    {
        public IAsyncQueryableExecuter AsyncQueryableExecuter { get; set; }

        protected IRepository<TEntity> Repository { get; }

        private ICrudOperation _crudOperation;
        protected ICrudOperation CrudOperation => LazyGetRequiredService(ref _crudOperation);

        protected virtual string GetPolicyName { get; set; }

        protected virtual string GetListPolicyName { get; set; }

        protected virtual string CreatePolicyName { get; set; }

        protected virtual string UpdatePolicyName { get; set; }

        protected virtual string DeletePolicyName { get; set; }

        public BaseCrudAppService(IRepository<TEntity> repository)
        {
            Repository = repository;
            AsyncQueryableExecuter = DefaultAsyncQueryableExecuter.Instance;
        }




        public virtual async Task<PagedResultDto<TGetListOutputDto>> GetListAsync(TGetListInput input)
        {
            await CheckGetListPolicyAsync().ConfigureAwait(false);

            var result = await CrudOperation.ListAsync(input, (x) => CreateFilteredQuery(input));

            return CreatePagedResultDto<TGetListOutputDto>(result);
        }

        public virtual async Task<PagedResultDto<TGetOutputDto>> GetListWithDetailsAsync(TGetListInput input)
        {
            await CheckGetListPolicyAsync().ConfigureAwait(false);

            var result = await CrudOperation.ListAsync(input, (x) => CreateFilteredQuery(input));

            return CreatePagedResultDto<TGetOutputDto>(result);
        }

        public async Task<TGetOutputDto> CreateAsync(TCreateInput input)
        {
            await CheckCreatePolicyAsync().ConfigureAwait(false);

            var entity = MapToEntity(input);

            TryToSetTenantId(entity);

            await Repository.InsertAsync(entity, autoSave: true).ConfigureAwait(false);

            return MapToDto<TGetOutputDto>(entity);
        }

        public async Task<TGetOutputDto> UpdateAsync(TKey id, TUpdateInput input)
        {
            await CheckUpdatePolicyAsync().ConfigureAwait(false);

            var entity = await GetEntityByIdAsync(id).ConfigureAwait(false);
            //TODO: Check if input has id different than given id and normalize if it's default value, throw ex otherwise
            MapToEntity(input, entity);
            await Repository.UpdateAsync(entity, autoSave: true).ConfigureAwait(false);

            return MapToDto<TGetOutputDto>(entity);
        }

        public async Task DeleteAsync(TKey id)
        {
            await CheckDeletePolicyAsync().ConfigureAwait(false);

            await Repository.DeleteAsync(createEqualityExpressionForKey(new { Id = id })).ConfigureAwait(false);
        }

        protected virtual Task<TEntity> GetEntityByIdAsync<TGetById>(TGetById id)
        {
            var isEntityWithIdKey = Volo.Abp.Reflection.ReflectionHelper.IsAssignableToGenericType(typeof(IEntity), typeof(TKey));
            if (isEntityWithIdKey)
            {
                return Task.FromResult(Repository.FirstOrDefault(createEqualityExpressionForKey(new { Id = id })));
            }
            else
            {
                return Task.FromResult(Repository.FirstOrDefault(createEqualityExpressionForKey(id)));
            }
        }

        protected virtual async Task CheckGetPolicyAsync()
        {
            await CheckPolicyAsync(GetPolicyName).ConfigureAwait(false);
        }

        protected virtual async Task CheckGetListPolicyAsync()
        {
            await CheckPolicyAsync(GetListPolicyName).ConfigureAwait(false);
        }

        protected virtual async Task CheckCreatePolicyAsync()
        {
            await CheckPolicyAsync(CreatePolicyName).ConfigureAwait(false);
        }

        protected virtual async Task CheckUpdatePolicyAsync()
        {
            await CheckPolicyAsync(UpdatePolicyName).ConfigureAwait(false);
        }

        protected virtual async Task CheckDeletePolicyAsync()
        {
            await CheckPolicyAsync(DeletePolicyName).ConfigureAwait(false);
        }

        protected virtual IQueryable<TEntity> CreateFilteredQuery(TGetListInput input)
        {
            return Repository;
        }





        protected virtual PagedResultDto<TDto> CreatePagedResultDto<TDto>((int TotalCount, System.Collections.Generic.List<TEntity> Entities) queryResult)
        {
            return new PagedResultDto<TDto>(
                queryResult.TotalCount,
                queryResult.Entities.Select(x => MapToDto<TDto>(x)).ToList());
        }
        protected virtual TDto MapToDto<TDto>(TEntity entity)
        {
            return ObjectMapper.Map<TEntity, TDto>(entity);
        }

        /// <summary>
        /// Maps <see cref="TCreateInput"/> to <see cref="TEntity"/> to create a new entity.
        /// It uses <see cref="IObjectMapper"/> by default.
        /// It can be overriden for custom mapping.
        /// </summary>
        protected virtual TEntity MapToEntity(TCreateInput createInput)
        {
            var entity = ObjectMapper.Map<TCreateInput, TEntity>(createInput);
            SetIdForGuids(entity);
            return entity;
        }

        /// <summary>
        /// Sets Id value for the entity if <see cref="TKey"/> is <see cref="Guid"/>.
        /// It's used while creating a new entity.
        /// </summary>
        protected virtual void SetIdForGuids(TEntity entity)
        {
            var entityWithGuidId = entity as IEntity<Guid>;

            if (entityWithGuidId == null || entityWithGuidId.Id != Guid.Empty)
            {
                return;
            }

            EntityHelper.TrySetId(
                entityWithGuidId,
                () => GuidGenerator.Create(),
                true
            );
        }

        protected virtual void MapToEntity(TUpdateInput updateInput, TEntity entity)
        {
            if (updateInput is IEntityDto<TKey> entityDto && entity is EntityDto<TKey> entityWithId)
            {
                entityDto.Id = entityWithId.Id;
            }

            ObjectMapper.Map(updateInput, entity);
        }

        protected virtual void TryToSetTenantId(TEntity entity)
        {
            if (entity is IMultiTenant && HasTenantIdProperty(entity))
            {
                var tenantId = CurrentTenant.Id;

                if (!tenantId.HasValue)
                {
                    return;
                }

                var propertyInfo = entity.GetType().GetProperty(nameof(IMultiTenant.TenantId));

                if (propertyInfo == null || propertyInfo.GetSetMethod(true) == null)
                {
                    return;
                }

                propertyInfo.SetValue(entity, tenantId);
            }
        }
        protected virtual bool HasTenantIdProperty(TEntity entity)
        {
            return entity.GetType().GetProperty(nameof(IMultiTenant.TenantId)) != null;
        }

        internal static Expression<Func<TEntity, bool>> createEqualityExpressionForKey(object compositekey)
        {
            var keyProperties = compositekey.GetType().GetProperties();

            var entityParameter = Expression.Parameter(typeof(TEntity), "e");

            return Expression.Lambda<Func<TEntity, bool>>(
                buildPredicate(keyProperties, compositekey, entityParameter), entityParameter);
        }
        internal static BinaryExpression buildPredicate<TEntityCompositeKeyDto>(
            IReadOnlyList<PropertyInfo> keyProperties,
            TEntityCompositeKeyDto keyValues,
            ParameterExpression entityParameter)
        {
            var keyValuesConstant = Expression.Constant(keyValues);

            var predicate = GenerateEqualExpression(keyProperties[0], 0);

            for (var i = 1; i < keyProperties.Count; i++)
            {
                predicate = Expression.AndAlso(predicate, GenerateEqualExpression(keyProperties[i], i));
            }



            return predicate;



            BinaryExpression GenerateEqualExpression(PropertyInfo property, int i) =>
                Expression.Equal(
                    Expression.PropertyOrField(entityParameter, property.Name),
                    Expression.Convert(
                        Expression.Property(
                            keyValuesConstant,
                            property),
                        property.PropertyType));
        }


    }
}
