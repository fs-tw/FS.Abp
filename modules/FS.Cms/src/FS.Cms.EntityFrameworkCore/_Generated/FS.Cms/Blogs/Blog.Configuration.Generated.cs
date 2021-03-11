﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 4.2.1
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

namespace FS.Cms.Blogs
{
    public partial class BlogConfiguration : IEntityTypeConfiguration<Blog>
    {
        private CmsModelBuilderConfigurationOptions options;
        public BlogConfiguration(CmsModelBuilderConfigurationOptions options)
        {
            this.options = options;
        }
        public void Configure(EntityTypeBuilder<Blog> builder)
        {
            builder.ToTable(options.TablePrefix + @"Blogs", options.Schema);
            builder.Property<Guid>(@"Id").HasColumnName(@"Id").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.No).HasColumnName(@"No").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.DisplayName).HasColumnName(@"DisplayName").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.Description).HasColumnName(@"Description").ValueGeneratedNever();
            builder.Property(x => x.Code).HasColumnName(@"Code").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.Level).HasColumnName(@"Level").ValueGeneratedNever();
            builder.Property(x => x.ParentId).HasColumnName(@"ParentId").ValueGeneratedNever();
            builder.Property(x => x.Disable).HasColumnName(@"Disable").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.ListStyle).HasColumnName(@"ListStyle").ValueGeneratedNever();
            builder.Property(x => x.Sequence).HasColumnName(@"Sequence").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.Url).HasColumnName(@"Url").ValueGeneratedNever();
            builder.Property(x => x.IconUrl).HasColumnName(@"IconUrl").ValueGeneratedNever();
            builder.Property(x => x.TenantId).HasColumnName(@"TenantId").ValueGeneratedNever();
            builder.HasKey(@"Id");
            builder.HasOne(x => x.Parent).WithMany(op => op.Children).IsRequired(false).HasForeignKey(@"ParentId");

            builder.ConfigureAuditedAggregateRoot();
            builder.HasIndex(x => x.CreationTime);

            CustomizeConfiguration(builder);
        }

        #region Partial Methods

        partial void CustomizeConfiguration(EntityTypeBuilder<Blog> builder);

        #endregion
    }

}
