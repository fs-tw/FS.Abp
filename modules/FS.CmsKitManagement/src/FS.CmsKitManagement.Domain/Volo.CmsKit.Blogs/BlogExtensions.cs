using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Data;

namespace Volo.CmsKit.Blogs
{
    public static class BlogExtensions
    {
        public static List<Guid> GetAttachmentMediaIds(this BlogPost post)
        {
            return post.GetExtraProperty<List<Guid>>("AttachmentMediaIds");
        }
        public static void SetAttachmentMediaIds(this BlogPost post, List<Guid> value)
        {
            post.SetProperty("AttachmentMediaIds", value);
        }
    }
}
