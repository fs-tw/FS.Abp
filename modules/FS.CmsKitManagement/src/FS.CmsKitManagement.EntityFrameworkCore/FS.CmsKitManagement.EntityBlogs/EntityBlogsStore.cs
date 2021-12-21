using FS.Abp.EntityFeatures;
using Microsoft.Extensions.Options;
using System;
using System.Threading.Tasks;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.EntityBlogs
{
    public partial class EntityBlogsStore : IEntityBlogsStore
    {
        protected IOptions<EntityFeaturesOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityFeaturesOptions>>();
        public virtual async Task<EntityBlog> CreateEntityBlogAsync<T>(T entity, Blog blog)
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
