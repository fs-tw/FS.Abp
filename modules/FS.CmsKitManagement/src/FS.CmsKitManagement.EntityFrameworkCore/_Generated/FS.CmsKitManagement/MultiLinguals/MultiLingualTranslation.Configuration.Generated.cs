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
    public partial class MultiLingualTranslationConfiguration : IEntityTypeConfiguration<MultiLingualTranslation>
    {
        private CmsKitManagementModelBuilderConfigurationOptions options;
        public MultiLingualTranslationConfiguration(CmsKitManagementModelBuilderConfigurationOptions options)
        {
            this.options = options;
        }
        public void Configure(EntityTypeBuilder<MultiLingualTranslation> builder)
        {
            builder.ToTable(options.TablePrefix + @"MultiLingualTranslations", options.Schema);
            builder.Property<Guid>(@"Id").HasColumnName(@"Id").HasColumnType(@"uniqueidentifier").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.Culture).HasColumnName(@"Culture").IsRequired().ValueGeneratedNever();
            builder.Ignore(x => x.Properties);
            builder.Property(x => x.MultiLingualId).HasColumnName(@"MultiLingualId").HasColumnType(@"uniqueidentifier").ValueGeneratedNever();
            builder.Property(x => x.TenantId).HasColumnName(@"TenantId").ValueGeneratedNever();
            builder.HasKey(@"Id");
            builder.HasOne(x => x.MultiLingual).WithMany(op => op.MultiLingualTranslations).IsRequired(true).HasForeignKey(@"MultiLingualId");

            builder.ConfigureAuditedAggregateRoot();
            builder.HasIndex(x => x.CreationTime);

            CustomizeConfiguration(builder);
        }

        #region Partial Methods

        partial void CustomizeConfiguration(EntityTypeBuilder<MultiLingualTranslation> builder);

        #endregion
    }

}
