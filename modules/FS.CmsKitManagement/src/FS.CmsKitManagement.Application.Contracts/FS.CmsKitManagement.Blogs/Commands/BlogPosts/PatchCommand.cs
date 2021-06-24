﻿using FS.CmsKitManagement.Blogs.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace FS.CmsKitManagement.Blogs.Commands.BlogPosts
{
    public record PatchCommand(PetchBlogPostDto input) : MediatR.IRequest<BlogPostDto>
    {
    }
}
