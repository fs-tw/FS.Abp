using FS.Abp.Zero.Application;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace FS.Abp.Application.Services
{
    public class CrudAppService<TEntity, TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        : Volo.Abp.Application.Services.CrudAppService<TEntity, TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>,
        FS.Abp.Application.Services.ICrudAppService< TGetOutputDto, TGetListOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput> where TEntity : class, IEntity<TKey>
        where TGetOutputDto : IEntityDto<TKey>
        where TGetListOutputDto : IEntityDto<TKey>
    {
        private ICrudOperation _crudOperation;
        protected ICrudOperation CrudOperation => LazyGetRequiredService(ref _crudOperation);

        public CrudAppService(IRepository<TEntity, TKey> repository)
            : base(repository)
        {

        }

        public virtual async Task<PagedResultDto<TGetOutputDto>> GetListWithDetailsAsync(TGetListInput input)
        {
            await CheckGetListPolicyAsync().ConfigureAwait(false);

            var result = await CrudOperation.ListAsync(input, (x) => CreateFilteredQuery(input));

            return CreatePagedResultDto<TGetOutputDto>(result);
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
    }
}
