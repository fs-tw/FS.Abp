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
using System.Data;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Common;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Volo.Abp.EntityFrameworkCore.Modeling;
using FS.CmsKitManagement.EntityFrameworkCore;

namespace FS.CmsKitManagement.Contents
{
    public partial class ContentPropertyConfiguration : IEntityTypeConfiguration<ContentProperty> //auto-generated
    {
        private CmsKitManagementModelBuilderConfigurationOptions options;
        public ContentPropertyConfiguration(CmsKitManagementModelBuilderConfigurationOptions options)
        {
            this.options = options;
        }
        public void Configure(EntityTypeBuilder<ContentProperty> builder)
        {
            builder.ToTable(options.TablePrefix + @"ContentProperties", options.Schema);
            builder.Property<Guid>(@"Id").HasColumnName(@"Id").HasColumnType(@"uniqueidentifier").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.ContentDefinitionId).HasColumnName(@"ContentDefinitionId").HasColumnType(@"uniqueidentifier").ValueGeneratedNever();
            builder.Property(x => x.Sequence).HasColumnName(@"Sequence").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.DisplayName).HasColumnName(@"DisplayName").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.Type).HasColumnName(@"Type").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.TenantId).HasColumnName(@"TenantId").ValueGeneratedNever();
            builder.HasKey(@"Id");
            builder.HasOne(x => x.ContentDefinition).WithMany(op => op.ContentProperties).IsRequired(true).HasForeignKey(@"ContentDefinitionId");

            builder.ConfigureAuditedAggregateRoot();
            builder.HasIndex(x => x.CreationTime);

            CustomizeConfiguration(builder);
        }

        partial void CustomizeConfiguration(EntityTypeBuilder<ContentProperty> builder);
    }
    public static partial class ContentPropertyQueryableExtensions //auto-generated
    {
        public static IQueryable<ContentProperty> IncludeDetails(this IQueryable<ContentProperty> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }

            IQueryable<ContentProperty> result = queryable
                .Include(x => x.ContentDefinition);

            CustomizeIncludeDetails(ref result);

            return result;
        }

        static partial void CustomizeIncludeDetails(ref IQueryable<ContentProperty> query);
    }
}