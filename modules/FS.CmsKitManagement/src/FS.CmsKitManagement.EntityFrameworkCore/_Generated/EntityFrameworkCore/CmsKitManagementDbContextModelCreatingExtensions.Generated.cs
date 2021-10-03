﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 4.4.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
namespace FS.CmsKitManagement.EntityFrameworkCore
{
    public static partial class CmsKitManagementDbContextModelCreatingExtensions
    {
        public static void ConfigureCmsKitManagement(
            this ModelBuilder builder,
            Action<CmsKitManagementModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new CmsKitManagementModelBuilderConfigurationOptions(
                CmsKitManagementDbProperties.DbTablePrefix,
                CmsKitManagementDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            CustomizeMapping(ref builder);

            builder.Ignore<FS.CmsKitManagement.Blogs.BlogPostSetting>();
            builder.ApplyConfiguration<FS.CmsKitManagement.MediaDescriptors.AttachmentMedia>(new FS.CmsKitManagement.MediaDescriptors.AttachmentMediaConfiguration(options));
        }
        static partial void CustomizeMapping(ref ModelBuilder modelBuilder);
    }
}
