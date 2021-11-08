﻿using FS.CmsKitManagement.Blogs.Dtos;
using System;
using System.Text;

namespace FS.CmsKitManagement.Blogs.Querys.BlogPosts
{
    public record FindQuery(Guid id) :
        FS.Abp.MediatR.IQuery,
        MediatR.IRequest<BlogPostDto>
    {
    }
}
