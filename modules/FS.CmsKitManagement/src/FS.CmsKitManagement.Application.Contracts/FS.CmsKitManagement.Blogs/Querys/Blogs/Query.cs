using FS.CmsKitManagement.Blogs.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace FS.CmsKitManagement.Blogs.Querys.Blogs
{
    public record Query(
        string filter = null,
        string sorting = null,
        int maxResultCount = int.MaxValue,
        int skipCount = 0,
        CancellationToken cancellationToken = default) : MediatR.IRequest<List<BlogDto>>
    {
    }
}
