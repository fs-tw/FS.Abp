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
            modelBuilder.ConfigureCmsKit();
        }
    }
}
