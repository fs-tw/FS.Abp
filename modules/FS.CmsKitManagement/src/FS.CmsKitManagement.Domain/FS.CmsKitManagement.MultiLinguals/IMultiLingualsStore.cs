using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial interface IMultiLingualsStore : IDomainService
    {
        Task<MultiLingual> FindMultiLingualAsync<T>(T entity)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>;

        Task<MultiLingual> CreateMultiLingualAsync<T>(T entity)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>;

        Task<MultiLingualTranslation> CreateMultiLingualTranslationAsync(MultiLingual entity, string culture);


    }
}
