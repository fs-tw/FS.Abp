﻿using FS.CmsKitManagement.Blogs.Dtos;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace FS.CmsKitManagement.Blogs.Querys.BlogPosts
{
    public record BlogQuery(
        string blogSlug,
        PagedAndSortedResultRequestDto input) :
        FS.Abp.MediatR.IQuery,
        MediatR.IRequest<PagedResultDto<BlogPostDto>>
    {
        
    }
}
