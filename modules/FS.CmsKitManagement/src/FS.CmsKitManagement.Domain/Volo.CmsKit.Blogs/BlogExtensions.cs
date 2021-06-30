using FS.CmsKitManagement;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Data;

namespace Volo.CmsKit.Blogs
{
    public static partial class BlogsExtensions
    {
        public static bool HasAttachmentMediaIds(this BlogPost post)
        {
            if (post.ExtraProperties.ContainsKey(Consts.AttachmentMediaIds) && post.GetAttachmentMediaIds() != null)
                return true;
            return false;
        }

        public static List<Guid> GetAttachmentMediaIds(this BlogPost post)
        {
            return post.GetExtraProperty<List<Guid>>(Consts.AttachmentMediaIds);
        }
        public static void SetAttachmentMediaIds(this BlogPost post, List<Guid> value)
        {
            post.SetProperty(Consts.AttachmentMediaIds, value);
        }
    }

    public static partial class BlogsExtensions
    {
        public static string GetDisplayStyle(this BlogPost post)
        {
            return post.GetProperty<string>(Consts.DisplayStyle);
        }
        public static void SetDisplayStyle(this BlogPost post, string value)
        {
            post.SetProperty(Consts.DisplayStyle, value);
        }
    }
}
