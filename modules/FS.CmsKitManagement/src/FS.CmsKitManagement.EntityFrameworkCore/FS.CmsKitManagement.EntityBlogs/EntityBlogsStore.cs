using FS.Abp.EntityTypes;
using JetBrains.Annotations;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.EntityBlogs
{
    public partial class EntityBlogsStore : IEntityBlogsStore
    {
        protected IOptions<EntityTypeOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityTypeOptions>>();
        public virtual async Task<EntityBlog> CreateAsync<T>(T entity, Blog blog)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var options = Options.Value;

            return new EntityBlog(GuidGenerator.Create())
            {
                BlogId = blog.Id,
                EntityType = options.GetOrDefault<EntityBlog>().GetOrDefault<T>().EntityType,
                EntityId = entity.Id.ToString(),
                TenantId = CurrentTenant.Id
            };
        }
    }
}
