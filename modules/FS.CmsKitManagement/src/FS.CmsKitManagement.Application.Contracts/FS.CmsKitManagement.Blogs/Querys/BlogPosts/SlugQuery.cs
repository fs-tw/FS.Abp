﻿using FS.CmsKitManagement.Blogs.Dtos;
using System;
using System.Text;

namespace FS.CmsKitManagement.Blogs.Querys.BlogPosts
{
    public record SlugQuery(
        string blogSlug,
        string blogPostSlug) : MediatR.IRequest<BlogPostDto>
    {
    }
}
