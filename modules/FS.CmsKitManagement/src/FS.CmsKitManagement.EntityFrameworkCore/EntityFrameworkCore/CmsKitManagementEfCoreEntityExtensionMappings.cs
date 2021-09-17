using Microsoft.EntityFrameworkCore;
using System;
using Volo.Abp.ObjectExtending;
using Volo.Abp.Threading;

namespace FS.CmsKitManagement.EntityFrameworkCore
{
    //[Obsolete("Remove")]
    public static class CmsKitManagementEfCoreEntityExtensionMappings
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public static void Configure()
        {
            OneTimeRunner.Run(() =>
            {
                ObjectExtensionManager.Instance.MapEfCoreProperty<Volo.CmsKit.Blogs.BlogPost, int>(Consts.ViewCount);
                ObjectExtensionManager.Instance.MapEfCoreProperty<Volo.CmsKit.Blogs.Blog, string>(Consts.DisplayStyle);
                ObjectExtensionManager.Instance.MapEfCoreProperty<Volo.CmsKit.Pages.Page, string>(Consts.DisplayStyle);
            });
        }
    }
}
