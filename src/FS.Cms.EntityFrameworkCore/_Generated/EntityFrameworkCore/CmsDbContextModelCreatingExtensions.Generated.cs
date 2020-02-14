﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
namespace FS.Cms.EntityFrameworkCore
{
    public static class CmsDbContextModelCreatingExtensions
    {
        public static void ConfigureCms(
            this ModelBuilder builder,
            Action<CmsModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new CmsModelBuilderConfigurationOptions(
                CmsDbProperties.DbTablePrefix,
                CmsDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            builder.Ignore<FS.Cms.Core.FileField>();
            builder.Ignore<FS.Cms.Core.ImageField>();
            builder.ApplyConfiguration<FS.Cms.Blogs.Blog>(new FS.Cms.Blogs.BlogConfiguration(options));
            builder.ApplyConfiguration<FS.Cms.Posts.Post>(new FS.Cms.Posts.PostConfiguration(options));
            builder.ApplyConfiguration<FS.Cms.Posts.PostTag>(new FS.Cms.Posts.PostTagConfiguration(options));
            builder.ApplyConfiguration<FS.Cms.Tagging.Tag>(new FS.Cms.Tagging.TagConfiguration(options));
            builder.ApplyConfiguration<FS.Cms.Documents.DocumentDefinition>(new FS.Cms.Documents.DocumentDefinitionConfiguration(options));
            builder.ApplyConfiguration<FS.Cms.Documents.Document>(new FS.Cms.Documents.DocumentConfiguration(options));
        }
    }
}
