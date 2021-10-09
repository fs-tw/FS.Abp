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

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial class MultiLingualConfiguration : IEntityTypeConfiguration<MultiLingual>
    {
        private CmsKitManagementModelBuilderConfigurationOptions options;
        public MultiLingualConfiguration(CmsKitManagementModelBuilderConfigurationOptions options)
        {
            this.options = options;
        }
        public void Configure(EntityTypeBuilder<MultiLingual> builder)
        {
            builder.ToTable(options.TablePrefix + @"MultiLinguals", options.Schema);
            builder.Property<Guid>(@"Id").HasColumnName(@"Id").HasColumnType(@"uniqueidentifier").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.EntityType).HasColumnName(@"EntityType").HasColumnType(@"nvarchar").IsRequired().ValueGeneratedNever().HasMaxLength(64);
            builder.Property(x => x.EntityId).HasColumnName(@"EntityId").HasColumnType(@"nvarchar").IsRequired().ValueGeneratedNever().HasMaxLength(64);
            builder.Property(x => x.DefaultCulture).HasColumnName(@"DefaultCulture").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.TenantId).HasColumnName(@"TenantId").ValueGeneratedNever();
            builder.HasKey(@"Id");

            builder.ConfigureAuditedAggregateRoot();
            builder.HasIndex(x => x.CreationTime);

            CustomizeConfiguration(builder);
        }

        #region Partial Methods

        partial void CustomizeConfiguration(EntityTypeBuilder<MultiLingual> builder);

        #endregion
    }

}
