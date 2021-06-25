using FS.CmsKitManagement.Blogs.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.Blogs.Commands.BlogPosts
{
    public class PatchCommandHandler : CmsKitManagementAppService, MediatR.IRequestHandler<PatchCommand, BlogPostDto>
    {
        public async Task<BlogPostDto> Handle(PatchCommand request, CancellationToken cancellationToken)
        {
            BlogPost blogPost = null;
            if (request.input.BlogPost.Id == Guid.Empty)
            {
                var newEntity = ObjectMapper.Map<BlogPostDto, BlogPost>(request.input.BlogPost);
                newEntity.AuthorId = CurrentUser.Id.Value;
                EntityHelper.TrySetId(newEntity, this.GuidGenerator.Create);
                blogPost = await this.BlogsStore.BlogPost.InsertAsync(newEntity, true);
            }
            else
            {
                var data = await this.BlogsStore.BlogPost.GetAsync(request.input.BlogPost.Id);
                ObjectMapper.Map(request.input.BlogPost, data);
                if (data.Slug != request.input.BlogPost.Slug)
                {
                    await this.BlogPostManager.SetSlugUrlAsync(data, request.input.BlogPost.Slug);
                }

                blogPost = await this.BlogsStore.BlogPost.UpdateAsync(data, true);
            }

            await this.BlogsStore.PatchRoutesAsync(blogPost.Id, request.input.RouteIds);

            var result = (await this.Mediator.Send(new Blogs.Querys.BlogPosts.DetailsQuery(new List<BlogPost>() { blogPost })))
                .Single();
            return result;
        }
    }
}
