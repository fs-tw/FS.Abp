using FS.Abp.Application.Dtos;
using Microsoft.Extensions.Localization;
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
        protected ISearchedAndPagedAndSortedOperation SearchedAndPagedAndSortedOperation => this.LazyServiceProvider.LazyGetRequiredService<ISearchedAndPagedAndSortedOperation>();

        protected EntityWithKeyCrudAppService(IRepository<TEntity> repository)
            : base(repository)
        {
        }
        public override async Task<PagedResultDto<TGetOutputDto>> GetListAsync(TGetListInput input)
        {
            await CheckGetListPolicyAsync();

            var query = await Repository.WithDetailsAsync();

            var result = await SearchedAndPagedAndSortedOperation.ListAsync(query, input);

            var entityDtos = await MapToGetListOutputDtosAsync(result.Entities);

            return new PagedResultDto<TGetOutputDto>(
                result.TotalCount,
                entityDtos
            );
        }
        protected override async Task DeleteByIdAsync(TKeyDto key)
        {
            await Repository.DeleteAsync(x => x.Id.Equals(key.Id));
        }

        protected override async Task<TEntity> GetEntityByIdAsync(TKeyDto key)
        {
            return await Repository.GetAsync(x => x.Id.Equals(key.Id));
        }

    }

}
