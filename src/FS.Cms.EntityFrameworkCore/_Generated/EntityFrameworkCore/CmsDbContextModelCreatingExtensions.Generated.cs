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

            builder.Ignore<FS.Cms.Core.CmsFileField>();
            builder.Ignore<FS.Cms.Core.CmsImageField>();
            builder.Ignore<FS.Cms.Core.BlogDefinitionSetting>();
            builder.Ignore<FS.Cms.Posts.PostImage>();
            builder.ApplyConfiguration<FS.Cms.Posts.Post>(new FS.Cms.Posts.PostConfiguration(options));
            builder.ApplyConfiguration<FS.Cms.Posts.PostTagMap>(new FS.Cms.Posts.PostTagMapConfiguration(options));
            builder.ApplyConfiguration<FS.Cms.Documents.DocumentDefinition>(new FS.Cms.Documents.DocumentDefinitionConfiguration(options));
            builder.ApplyConfiguration<FS.Cms.Documents.Document>(new FS.Cms.Documents.DocumentConfiguration(options));
        }
    }
}
