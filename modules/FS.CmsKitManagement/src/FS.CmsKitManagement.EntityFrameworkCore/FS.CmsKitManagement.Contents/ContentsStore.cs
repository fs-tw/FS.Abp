using System;
using System.Linq;
using System.Collections.Generic;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;

namespace FS.CmsKitManagement.Contents
{

    public partial class ContentsStore
    {
        protected IOptions<ContentsOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<ContentsOptions>>();
        protected IContentDefinitionRepository ContentDefinitions => this.LazyServiceProvider.LazyGetRequiredService<IContentDefinitionRepository>();

        public async Task<IQueryable<ContentDefinition>> GetByEntityTypeAsync<T>()
        {
            var entityType = Options.Value.EntityTypes[typeof(T)].EntityType;

            return await GetByEntityTypeAsync(entityType);
        }
        public async Task<IQueryable<ContentDefinition>> GetByEntityTypeAsync(string entityType)
        {
            var query = await ContentDefinitions.WithDetailsAsync();

            return query.Where(x => x.EntityType == entityType);
        }
    }
}
