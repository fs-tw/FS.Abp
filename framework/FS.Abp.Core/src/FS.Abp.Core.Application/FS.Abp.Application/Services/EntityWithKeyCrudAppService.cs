using FS.Abp.Application.Dtos;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Auditing;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace FS.Abp.Application.Services
{
    public abstract class EntityWithKeyCrudAppService<TEntity, TGetOutputDto, TKeyDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        : AbstractKeyCrudAppService<TEntity, TGetOutputDto, TGetOutputDto, TKeyDto, TGetListInput, TCreateInput, TUpdateInput>
        where TEntity : class, IEntity<TKey>
        where TGetOutputDto : IEntityDto
        where TKeyDto : IEntityDto<TKey>
        where TGetListInput : ISearchResultRequest
    {
        protected new IRepository<TEntity, TKey> Repository { get; }

        private ISearchedAndPagedAndSortedOperation _searchedAndpagedAndSortedOperation;
        protected ISearchedAndPagedAndSortedOperation SearchedAndPagedAndSortedOperation => LazyGetRequiredService(ref _searchedAndpagedAndSortedOperation);

        protected EntityWithKeyCrudAppService(IRepository<TEntity, TKey> repository)
            : base(repository)
        {
            Repository = repository;
        }
        //GetList need WithDetail
        protected override IQueryable<TEntity> CreateFilteredQuery(TGetListInput input)
        {
            var query = Repository.WithDetails();
            if (input is ISearchResultRequest searchInput)
            {
                var searchSpec = new FS.Abp.Specifications.SearchSpecification<TEntity>(searchInput.Fields, searchInput.Value);
                query = query.Where(searchSpec);
            }
            return query;
        }

        protected override async Task DeleteByIdAsync(TKeyDto id)
        {
            await Repository.DeleteAsync(id.Id);
        }

        protected override async Task<TEntity> GetEntityByIdAsync(TKeyDto id)
        {
            return await Repository.GetAsync(id.Id);
        }

        protected override void MapToEntity(TUpdateInput updateInput, TEntity entity)
        {
            if (updateInput is IEntityDto<TKey> entityDto)
            {
                entityDto.Id = entity.Id;
            }

            base.MapToEntity(updateInput, entity);
        }
        protected override IQueryable<TEntity> ApplyDefaultSorting(IQueryable<TEntity> query)
        {
            if (typeof(TEntity).IsAssignableTo<IHasCreationTime>())
            {
                return query.OrderByDescending(e => ((IHasCreationTime)e).CreationTime);
            }
            else
            {
                return query.OrderByDescending(e => e.Id);
            }
        }


    }

}
