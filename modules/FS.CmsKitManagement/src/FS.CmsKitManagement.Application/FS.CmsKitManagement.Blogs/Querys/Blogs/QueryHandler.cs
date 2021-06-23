using FS.CmsKitManagement.Blogs.Dtos;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.Blogs.Querys.Blogs
{
    
    public class QueryHandler : CmsKitManagementAppService, MediatR.IRequestHandler<Query, List<BlogDto>>
    {
        public async Task<List<BlogDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var blogRepository = this.LazyServiceProvider.LazyGetRequiredService<IBlogRepository>();
            var blogs = await blogRepository.GetListAsync(
                request.filter,
                request.sorting,
                request.maxResultCount,
                request.skipCount,
                request.cancellationToken);
            return ObjectMapper.Map<List<Blog>, List<BlogDto>>(blogs);
        }
    }
}
