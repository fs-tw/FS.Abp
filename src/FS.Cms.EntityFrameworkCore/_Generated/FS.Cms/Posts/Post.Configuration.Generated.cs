﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 4.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Volo.Abp.EntityFrameworkCore.Modeling;
using FS.Cms.EntityFrameworkCore;

namespace FS.Cms.Posts
{
    public partial class PostConfiguration : IEntityTypeConfiguration<Post>
    {
        private CmsModelBuilderConfigurationOptions options;
        public PostConfiguration(CmsModelBuilderConfigurationOptions options)
        {
            this.options = options;
        }
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder.ToTable(options.TablePrefix + @"Posts", options.Schema);
            builder.Property<System.Guid>(x => x.BlogId).HasColumnName(@"BlogId").IsRequired().ValueGeneratedNever();
            builder.Property<string>(x => x.Title).HasColumnName(@"Title").IsRequired().ValueGeneratedNever();
            builder.Property<string>(x => x.Subtitle).HasColumnName(@"Subtitle").ValueGeneratedNever();
            builder.Property<string>(x => x.Url).HasColumnName(@"Url").ValueGeneratedNever();
            builder.Property<string>(x => x.Content).HasColumnName(@"Content").ValueGeneratedNever();
            builder.Property<bool>(x => x.Published).HasColumnName(@"Published").IsRequired().ValueGeneratedNever();
            builder.Property<System.DateTime?>(x => x.Published_By).HasColumnName(@"Published_By").ValueGeneratedNever();
            builder.Property<System.DateTime>(x => x.Published_At).HasColumnName(@"Published_At").IsRequired().ValueGeneratedNever();
            builder.Property<FS.Cms.Posts.DisplayMode>(x => x.DisplayMode).HasColumnName(@"DisplayMode").IsRequired().ValueGeneratedNever();
            builder.Property<int>(x => x.Sequence).HasColumnName(@"Sequence").IsRequired().ValueGeneratedNever();
            builder.Ignore(x => x.AttachmentFileUrls);
            builder.Ignore(x => x.PostImages);
            builder.Property<System.Guid?>(x => x.TenantId).HasColumnName(@"TenantId").ValueGeneratedNever();
            builder.HasKey(@"Id");
            builder.HasMany(x => x.PostTags).WithOne().IsRequired(true).HasForeignKey(@"PostId");

            builder.ConfigureFullAuditedAggregateRoot();
            builder.HasIndex(x => x.CreationTime);

            CustomizeConfiguration(builder);
        }

        #region Partial Methods

        partial void CustomizeConfiguration(EntityTypeBuilder<Post> builder);

        #endregion
    }

}
