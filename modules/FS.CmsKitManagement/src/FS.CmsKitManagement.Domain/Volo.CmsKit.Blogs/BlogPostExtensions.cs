using FS.CmsKitManagement;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Data;

namespace Volo.CmsKit.Blogs
{
    public static partial class BlogPostExtensions
    {
        public static int GetViewCount(this BlogPost post)
        {
            return int.Parse(post.GetProperty(Consts.ViewCount).ToString());
        }
        public static void SetViewCount(this BlogPost post, int value)
        {
            post.SetProperty(Consts.ViewCount, value);
        }
    }
}
