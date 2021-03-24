using FS.Cms.Blogs.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Blogs
{
    public partial interface IBlogsApi
    {
        Task<PagedResultDto<BlogWithDetailsDto>> GetBlogs(GetBlogsInput input);

        Task<PagedResultDto<BlogWithDetailsDto>> GetFrontBlogs(GetBlogsInput input);
    }
}
