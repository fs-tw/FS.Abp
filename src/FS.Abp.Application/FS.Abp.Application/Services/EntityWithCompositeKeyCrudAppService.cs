﻿using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace FS.Abp.Application.Services
{
    public abstract class EntityWithCompositeKeyCrudAppService<TEntity, TGetOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
       : BaseCrudAppService<TEntity, TGetOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>,
        IEntityWithCompositeKeyCrudAppService<TGetOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
        where TEntity : class, IEntity
        where TGetOutputDto : IEntityDto
    {
        protected EntityWithCompositeKeyCrudAppService(IRepository<TEntity> repository)
            : base(repository) { }

        public virtual async Task<TGetOutputDto> GetFindAsync(TKey key)
        {
            await CheckGetPolicyAsync().ConfigureAwait(false);

            var entity = await GetEntityByIdAsync(key).ConfigureAwait(false);

            return MapToDto<TGetOutputDto>(entity);

        }
        [RemoteService(false)]
        public override Task<TGetOutputDto> UpdateAsync(TKey id, TUpdateInput input)
        {
            return base.UpdateAsync(id, input);
        }
        public virtual async Task<TGetOutputDto> UpdateAsync(TUpdateInput input)
        {
            var keys = ObjectMapper.Map<TUpdateInput, TKey>(input);

            return await base.UpdateAsync(keys, input);

        }

        public override async Task DeleteAsync(TKey input)
        {
            await base.DeleteAsync(input);
        }


    }

}
