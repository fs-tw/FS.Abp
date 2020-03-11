using FS.Abp.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
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
    public abstract class BaseCrudAppService<TEntity, TGetOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
            : Volo.Abp.Application.Services.ApplicationService,
            FS.Abp.Application.Services.IBaseCrudAppService<TGetOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
            where TEntity : class, IEntity
            where TGetOutputDto : IEntityDto
    {
        public IAsyncQueryableExecuter AsyncQueryableExecuter { get; set; }

        protected IRepository<TEntity> Repository { get; }

        private ISearchedAndPagedAndSortedOperation _searchedAndpagedAndSortedOperation;
        protected ISearchedAndPagedAndSortedOperation SearchedAndPagedAndSortedOperation => LazyGetRequiredService(ref _searchedAndpagedAndSortedOperation);

        protected virtual string GetPolicyName { get; set; }

        protected virtual string GetListPolicyName { get; set; }

        protected virtual string CreatePolicyName { get; set; }

        protected virtual string UpdatePolicyName { get; set; }

        protected virtual string DeletePolicyName { get; set; }

        internal bool isEntityWithIdKey => Volo.Abp.Reflection.ReflectionHelper.IsAssignableToGenericType(typeof(TEntity), typeof(IEntity<>));

        public BaseCrudAppService(IRepository<TEntity> repository)
        {
            Repository = repository;
            AsyncQueryableExecuter = DefaultAsyncQueryableExecuter.Instance;
        }
        [Obsolete("remove in next version,because only GetListAsync used,please replace  with CreatePropertiesEqualityQuery to query")]
        protected virtual IQueryable<TEntity> CreateFilteredQuery(TGetListInput input)
        {
            return Repository.WithDetails();
        }
        protected virtual IQueryable<TEntity> CreatePropertiesEqualityQuery(object searchObject)
        {
            var searchSpec = new FS.Abp.Specifications.PropertiesEqualitySpecification<TEntity>(searchObject);
            var result = this.Repository.WithDetails().WhereIf(searchObject != null, searchSpec);
            return result;
        }
        public virtual async Task<PagedResultDto<TGetOutputDto>> GetListAsync(TGetListInput input)
        {
            await CheckGetListPolicyAsync().ConfigureAwait(false);
            var query = CreateFilteredQuery(input);
            var result = await SearchedAndPagedAndSortedOperation.ListAsync(query,input);
            return CreatePagedResultDto<TGetOutputDto>(result);
        }

        public virtual async Task<TGetOutputDto> CreateAsync(TCreateInput input)
        {
            await CheckCreatePolicyAsync().ConfigureAwait(false);

            var entity = MapToEntity(input);

            TryToSetTenantId(entity);

            await Repository.InsertAsync(entity, autoSave: true).ConfigureAwait(false);

            return MapToDto<TGetOutputDto>(entity);
        }

        public virtual async Task<TGetOutputDto> UpdateAsync(TKey id, TUpdateInput input)
        {
            await CheckUpdatePolicyAsync().ConfigureAwait(false);

            var entity = await GetEntityByIdAsync(id).ConfigureAwait(false);
            //TODO: Check if input has id different than given id and normalize if it's default value, throw ex otherwise
            MapToEntity(input, entity);

            await Repository.UpdateAsync(entity, autoSave: true).ConfigureAwait(false);

            return MapToDto<TGetOutputDto>(entity);
        }

        public virtual async Task DeleteAsync(TKey id)
        {
            await CheckDeletePolicyAsync().ConfigureAwait(false);
            var keysEquality = CreateKeysEqualitySpec(id);
            await Repository.DeleteAsync(keysEquality).ConfigureAwait(false);
        }

        protected virtual Task<TEntity> GetEntityByIdAsync<TGetById>(TGetById id)
        {
            var keysEquality = CreateKeysEqualitySpec(id);
            return Task.FromResult(Repository.FirstOrDefault(keysEquality));
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
        protected virtual FS.Abp.Specifications.PropertiesEqualitySpecification<TEntity> CreateKeysEqualitySpec<TGetById>(TGetById id)
        {
            if (isEntityWithIdKey)
            {
                return new FS.Abp.Specifications.PropertiesEqualitySpecification<TEntity>(new { Id = id });
            }
            else
            {
                return new FS.Abp.Specifications.PropertiesEqualitySpecification<TEntity>(id);
            }
        }


    }
}
