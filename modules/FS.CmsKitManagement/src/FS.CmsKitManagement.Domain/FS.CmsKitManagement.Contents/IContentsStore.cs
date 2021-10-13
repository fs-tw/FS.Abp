using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CmsKitManagement.Contents
{
    public partial interface IContentsStore : IDomainService
    {
        Task<ContentDefinition> CreateAsync<T>(string displayName)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>;
    }
}
