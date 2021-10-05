﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 4.4.3
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
            builder.Ignore<FS.CmsKitManagement.MultiLinguals.MultiLingualProperty>();
            builder.ApplyConfiguration<FS.CmsKitManagement.MediaDescriptors.AttachmentMedia>(new FS.CmsKitManagement.MediaDescriptors.AttachmentMediaConfiguration(options));
            builder.ApplyConfiguration<FS.CmsKitManagement.Contents.ContentDefinition>(new FS.CmsKitManagement.Contents.ContentDefinitionConfiguration(options));
            builder.ApplyConfiguration<FS.CmsKitManagement.Contents.ContentType>(new FS.CmsKitManagement.Contents.ContentTypeConfiguration(options));
            builder.ApplyConfiguration<FS.CmsKitManagement.Contents.EntityContent>(new FS.CmsKitManagement.Contents.EntityContentConfiguration(options));
            builder.ApplyConfiguration<FS.CmsKitManagement.Contents.EntityContentDefinition>(new FS.CmsKitManagement.Contents.EntityContentDefinitionConfiguration(options));
            builder.ApplyConfiguration<FS.CmsKitManagement.Shapes.Shape>(new FS.CmsKitManagement.Shapes.ShapeConfiguration(options));
            builder.ApplyConfiguration<FS.CmsKitManagement.MultiLinguals.MultiLingual>(new FS.CmsKitManagement.MultiLinguals.MultiLingualConfiguration(options));
            builder.ApplyConfiguration<FS.CmsKitManagement.MultiLinguals.MultiLingualTranslation>(new FS.CmsKitManagement.MultiLinguals.MultiLingualTranslationConfiguration(options));
        }
        static partial void CustomizeMapping(ref ModelBuilder modelBuilder);
    }
}
