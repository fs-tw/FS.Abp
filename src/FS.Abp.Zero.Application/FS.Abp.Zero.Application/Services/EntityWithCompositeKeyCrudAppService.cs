using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;
using Volo.Abp.MultiTenancy;

namespace FS.Abp.Zero.Application.Services
{
    public class EntityWithCompositeKeyCrudAppService<TEntity, TGetOutputDto, TGetListOutputDto, TGetListInput, TCreateInput, TUpdateInput>
       : ApplicationService
        //ICrudAppService<TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        where TEntity :class, IEntity
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

        protected EntityWithCompositeKeyCrudAppService(IRepository<TEntity> repository)
        {
            Repository = repository;
            AsyncQueryableExecuter = DefaultAsyncQueryableExecuter.Instance;
        }

        public virtual async Task<TGetOutputDto> GetAsync(List<object> keyValues)
        {
            await CheckGetPolicyAsync().ConfigureAwait(false);

            var entity = await GetEntityByIdAsync(keyValues.ToArray()).ConfigureAwait(false);
            return MapToDto<TGetOutputDto>(entity);
        }

        //todo:
        protected virtual Task<TEntity> GetEntityByIdAsync(object[] keyValues)
        {

            //var keyProperties = new TEntity().GetCompositeKeyProperties();

            //if (keyProperties.Count() != keyValues.Length)
            //{
            //    //error todo
            //    //if (keyProperties.Count == 1)
            //    //{
            //    //    throw new ArgumentException(
            //    //        CoreStrings.FindNotCompositeKey(typeof(TEntity).ShortDisplayName(), keyValues.Length));
            //    //}

            //    //throw new ArgumentException(
            //    //    CoreStrings.FindValueCountMismatch(typeof(TEntity).ShortDisplayName(), keyProperties.Count, keyValues.Length));
            //}

            //for (var i = 0; i < keyValues.Length; i++)
            //{
            //    //error todo
            //    //var valueType = keyValues[i].GetType();
            //    //var propertyType = keyProperties[i].ClrType;
            //    //if (valueType != propertyType.UnwrapNullableType())
            //    //{
            //    //    throw new ArgumentException(
            //    //        CoreStrings.FindValueTypeMismatch(
            //    //            i, typeof(TEntity).ShortDisplayName(), valueType.ShortDisplayName(), propertyType.ShortDisplayName()));
            //    //}
            //}

            //var equalityLambda= FS.Abp.Zero.Domain.Entities.EntityHelper.CreateEqualityExpressionForCompositeKey<TEntity>(keyValues);

            //return Task.FromResult(Repository.FirstOrDefault(equalityLambda));
            return Task.FromResult<TEntity>(null);
        }




        public virtual async Task<PagedResultDto<TGetOutputDto>> GetListWithDetailsAsync(TGetListInput input)
        {
            await CheckGetListPolicyAsync().ConfigureAwait(false);

            var result = await CrudOperation.ListAsync(input, (x) => CreateFilteredQuery(input));

            return CreatePagedResultDto<TGetOutputDto>(result);
        }
        //public virtual async Task<PagedResultDto<TGetListOutputDto>> GetListAsync(TGetListInput input)
        //{
        //    await CheckGetListPolicyAsync().ConfigureAwait(false);

        //    var result = await CrudOperation.ListAsync(input, (x) => CreateFilteredQuery(input));

        //    return CreatePagedResultDto<TGetListOutputDto>(result);
        //}

        public virtual async Task<TGetOutputDto> CreateAsync(TCreateInput input)
        {
            await CheckCreatePolicyAsync().ConfigureAwait(false);

            var entity = MapToEntity(input);

            TryToSetTenantId(entity);

            await Repository.InsertAsync(entity, autoSave: true).ConfigureAwait(false);

            return MapToDto<TGetOutputDto>(entity);
        }
        //todo key
        public virtual async Task<TGetOutputDto> UpdateAsync(object[] ids, TUpdateInput input)
        {
            await CheckUpdatePolicyAsync().ConfigureAwait(false);
            var entity = default(TEntity);
            //var entity = await GetEntityByIdAsync(id).ConfigureAwait(false);
            //TODO: Check if input has id different than given id and normalize if it's default value, throw ex otherwise
            MapToEntity(input, entity);
            await Repository.UpdateAsync(entity, autoSave: true).ConfigureAwait(false);

            return MapToDto<TGetOutputDto>(entity);
        }
        //todo key
        public virtual async Task DeleteAsync(object[] id)
        {
            await CheckDeletePolicyAsync().ConfigureAwait(false);
            var entity = default(TEntity);
            await Repository.DeleteAsync(entity).ConfigureAwait(false);
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
        protected virtual TEntity MapToEntity(TCreateInput createInput)
        {
            var entity = ObjectMapper.Map<TCreateInput, TEntity>(createInput);
            //SetIdForGuids(entity);
            return entity;
        }
        protected virtual void MapToEntity(TUpdateInput updateInput, TEntity entity)
        {
            //key map
            //if (updateInput is IEntityDto entityDto)
            //{
                
            //    //entityDto.Id = entity.Id;
            //}

            ObjectMapper.Map(updateInput, entity);
        }
        //protected virtual void SetIdForGuids(TEntity entity)
        //{
        //    var entityWithGuidId = entity as IEntity<Guid>;

        //    if (entityWithGuidId == null || entityWithGuidId.Id != Guid.Empty)
        //    {
        //        return;
        //    }

        //    Volo.Abp.Domain.Entities.EntityHelper.TrySetId(
        //        entityWithGuidId,
        //        () => GuidGenerator.Create(),
        //        true
        //    );
        //}

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
    }
}
