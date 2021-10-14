using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CmsKitManagement.Contents
{
    public partial interface IContentsStore : IDomainService
    {
        Task<List<ContentDefinition>> ListContentDefinitionAsync<T>()
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>;
        Task<ContentDefinition> CreateContentDefinitionAsync<T>(string displayName)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>;
        Task<ContentType> CreateContentTypeAsync(ContentDefinition entity, string displayName, DataType type = DataType.Text, int sequence = 0);
    }
}
