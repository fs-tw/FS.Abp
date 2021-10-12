using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.EntityBlogs
{
    public partial interface IEntityBlogsStore : IDomainService
    {
        Task<EntityBlog> CreateAsync<T>(T entity, Blog blog)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>;
    }
}
