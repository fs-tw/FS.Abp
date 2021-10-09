using System;
using System.Linq;
using System.Collections.Generic;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using FS.Abp.EntityTypes;

namespace FS.CmsKitManagement.Contents
{

    public partial class ContentsStore
    {
        protected IOptions<EntityTypeOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityTypeOptions>>();
        public async Task<IQueryable<ContentDefinition>> GetByEntityTypeAsync<T>()
        {
            return await GetByEntityTypeAsync(typeof(T));
        }

        public async Task<IQueryable<ContentDefinition>> GetByEntityTypeAsync(Type type)
        {
            var entityType = Options.Value.GetOrDefault<ContentDefinition>().GetOrDefault(type).EntityType;

            return await GetByEntityTypeAsync(entityType);
        }

        public async Task<IQueryable<ContentDefinition>> GetByEntityTypeAsync(string entityType)
        {
            var query = await ContentDefinition.WithDetailsAsync();

            return query.Where(x => x.EntityType == entityType);
        }

        public async Task<List<EntityContentModel>> GetEntityContentAsync(Volo.Abp.Domain.Entities.Entity<Guid> entity)
        {
            var entityType = Options.Value.GetOrDefault<ContentDefinition>().GetOrDefault(entity.GetType()).EntityType;
            var contentDefinitions = (await this.GetByEntityTypeAsync(entity.GetType())).ToDictionary(x => x.Id, y => y);
            var contentDefinitionIds = contentDefinitions.Keys.ToList();

            var query = await EntityContent.WithDetailsAsync();
            var contents = await query.Where(x =>
                x.EntityType == entityType &&
                x.EntityId == entity.Id.ToString() &&
                contentDefinitionIds.Contains(x.ContentTypeId)).ToListAsync();

            return contents.GroupBy(x => x.ContentType.ContentDefinitionId)
                .OrderBy(x=>x.FirstOrDefault())
                .Select(x =>
                {
                    var item = new EntityContentModel();
                    item.Name = contentDefinitions[x.Key].DisplayName;
                    var t = x
                    .ToList()
                    .GroupBy(y => y.Index)
                    .OrderBy(y => y.Key)
                    .Select(y =>
                    {
                        return y.GroupBy(z => z.ContentType.DisplayName, z => z)
                        
                        .ToDictionary(z => z.Key, z => z.FirstOrDefault().Value);
                    }).ToList();
                    item.Contents = t;
                    return item;
                })
                .ToList();




        }
    }
    public class EntityContentModel
    {
        public string Name { get; set; }
        public List<Dictionary<string, string>> Contents { get; set; } = new();
    }
}
