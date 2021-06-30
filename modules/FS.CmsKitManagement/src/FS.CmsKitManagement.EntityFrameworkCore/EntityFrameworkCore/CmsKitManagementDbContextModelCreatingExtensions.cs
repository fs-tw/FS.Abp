using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.ObjectExtending;
using Volo.CmsKit.EntityFrameworkCore;

namespace FS.CmsKitManagement.EntityFrameworkCore
{
    public static partial class CmsKitManagementDbContextModelCreatingExtensions
    {
        static partial void CustomizeMapping(ref ModelBuilder modelBuilder)
        {
            ObjectExtensionManager.Instance.MapEfCoreProperty<Volo.CmsKit.Blogs.BlogPost, int>(Consts.ViewCount);
            ObjectExtensionManager.Instance.MapEfCoreProperty<Volo.CmsKit.Blogs.Blog, string>(Consts.DisplayStyle);
            ObjectExtensionManager.Instance.MapEfCoreProperty<Volo.CmsKit.Pages.Page, string>(Consts.DisplayStyle);
            modelBuilder.ConfigureCmsKit();
        }
    }
}
