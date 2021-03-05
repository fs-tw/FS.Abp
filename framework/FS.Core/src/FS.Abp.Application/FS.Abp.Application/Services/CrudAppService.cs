using System;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;
using Volo.Abp.MultiTenancy;
using Volo.Abp.ObjectMapping;

namespace FS.Abp.Application.Services
{
    public abstract class CrudAppService<TEntity, TGetOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
       : BaseCrudAppService<TEntity, TGetOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>,
        ICrudAppService<TGetOutputDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
           where TEntity : class, IEntity<TKey>
        where TGetOutputDto : IEntityDto<TKey>
    {
        protected new IRepository<TEntity, TKey> Repository { get; }

        protected CrudAppService(IRepository<TEntity, TKey> repository)
            : base(repository)
        {
            this.Repository = repository;
        }

        public virtual async Task<TGetOutputDto> GetAsync(TKey id)
        {
            await CheckGetPolicyAsync().ConfigureAwait(false);

            var entity = await GetEntityByIdAsync(id).ConfigureAwait(false);

            return MapToDto<TGetOutputDto>(entity);
        }
    }

    

}
