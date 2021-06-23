using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Services;
using Volo.Abp.ObjectMapping;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.Blogs
{
    public partial class BlogsStore : DomainService, IBlogsStore
    {
        private IBlogPostRepository BlogPostRepository => this.LazyServiceProvider.LazyGetRequiredService<IBlogPostRepository>();

        private IObjectMapper ObjectMapper => this.LazyServiceProvider.LazyGetRequiredService<IObjectMapper>();


        public async Task<BlogPost> PatchBlogPostAsync(BlogPost blogPost, List<Guid> routeIds, Guid userId)
        {
            if (blogPost.Id == Guid.Empty)
            {
                blogPost.AuthorId = userId;
                EntityHelper.TrySetId(blogPost, this.GuidGenerator.Create);
                blogPost = await this.BlogPostRepository.InsertAsync(blogPost, true);
            }
            else
            {
                var data = await this.BlogPostRepository.GetAsync(blogPost.Id);
                ObjectMapper.Map(blogPost, data);

                blogPost = await this.BlogPostRepository.UpdateAsync(data, true);
            }

            await this.patchRoutes(blogPost.Id, routeIds);

            return blogPost;
        }

        public async Task DeletePostRouteByRouteIdAsync(Guid routeId)
        {
            var deleteIds = await this.AsyncExecuter.ToListAsync(this.PostRoute
                .Where(x => x.RouteId == routeId)
                .Select(x => x.Id));

            await this.PostRoute.DeleteManyAsync(deleteIds);
        }

        private async Task patchRoutes(Guid postId, List<Guid> routeIds)
        {
            var postRoutes = await this.AsyncExecuter.ToListAsync(this.PostRoute
                .Where(x => x.PostId == postId));

            // 過去有 現在沒有
            var deleteRouteIds = postRoutes
                .Where(x => !routeIds.Contains(x.RouteId))
                .Select(x => x.Id)
                .ToList();

            // 現在有 過去沒有
            var createIds = routeIds
                .Where(x => !postRoutes.Select(y => y.RouteId).Contains(x));

            foreach (var id in deleteRouteIds)
            {
                await this.PostRoute.DeleteAsync(id);
            }

            var createPostRoutes = new List<PostRoute>();
            foreach (var routeId in createIds)
            {
                var domain = new PostRoute()
                {
                    PostId = postId,
                    RouteId = routeId
                };

                EntityHelper.TrySetId(domain, this.GuidGenerator.Create);
                createPostRoutes.Add(domain);
            }

            await this.PostRoute.InsertManyAsync(createPostRoutes);
        }

    }
}
