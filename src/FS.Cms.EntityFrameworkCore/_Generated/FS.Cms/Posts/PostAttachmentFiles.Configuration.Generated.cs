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
    public partial class PostAttachmentFilesConfiguration : IEntityTypeConfiguration<PostAttachmentFiles>
    {
        private CmsModelBuilderConfigurationOptions options;
        public PostAttachmentFilesConfiguration(CmsModelBuilderConfigurationOptions options)
        {
            this.options = options;
        }
        public void Configure(EntityTypeBuilder<PostAttachmentFiles> builder)
        {
            builder.ToTable(options.TablePrefix + @"PostAttachmentFiles", options.Schema);
            builder.Property<string>(x => x.Content).HasColumnName(@"Content").IsRequired().ValueGeneratedNever();
            builder.Property<System.Guid>(x => x.PostId).HasColumnName(@"PostId").IsRequired().ValueGeneratedNever();
            builder.Property<System.Guid?>(x => x.TenantId).HasColumnName(@"TenantId").ValueGeneratedNever();
            builder.HasKey(@"Id");

            builder.ConfigureFullAuditedAggregateRoot();

            CustomizeConfiguration(builder);
        }

        #region Partial Methods

        partial void CustomizeConfiguration(EntityTypeBuilder<PostAttachmentFiles> builder);

        #endregion
    }

}
