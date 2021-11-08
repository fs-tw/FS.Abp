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

        Task<List<EntityContentDefinition>> ListEntityContentDefinitionAsync<T>(T entity)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>;

        Task<ContentDefinition> CreateContentDefinitionAsync<T>(string displayName)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>;

        Task<ContentProperty> CreateContentPropertyAsync(ContentDefinition entity, string displayName, DataType type = DataType.Text, int sequence = 0);

        Task<EntityContentDefinition> CreateEntityContentDefinitionAsync<T>(T entity, ContentDefinition contentDefinition)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>;

        Task<EntityContent> CreateEntityContentAsync<T>(T entity, EntityContentDefinition entityContentDefinition, int sequence = 0)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>;
    }
}
