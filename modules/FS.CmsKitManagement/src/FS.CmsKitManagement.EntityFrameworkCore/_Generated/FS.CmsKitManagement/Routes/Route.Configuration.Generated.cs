﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 4.3.0
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

namespace FS.CmsKitManagement.Routes
{
    public partial class RouteConfiguration : IEntityTypeConfiguration<Route>
    {
        private CmsKitManagementModelBuilderConfigurationOptions options;
        public RouteConfiguration(CmsKitManagementModelBuilderConfigurationOptions options)
        {
            this.options = options;
        }
        public void Configure(EntityTypeBuilder<Route> builder)
        {
            builder.ToTable(options.TablePrefix + @"Routes", options.Schema);
            builder.Property<Guid>(@"Id").HasColumnName(@"Id").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.No).HasColumnName(@"No").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.DisplayName).HasColumnName(@"DisplayName").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.RouteDefinitionId).HasColumnName(@"RouteDefinitionId").ValueGeneratedNever();
            builder.Property(x => x.Code).HasColumnName(@"Code").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.ParentId).HasColumnName(@"ParentId").ValueGeneratedNever();
            builder.Property(x => x.UrlType).HasColumnName(@"UrlType").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.Url).HasColumnName(@"Url").ValueGeneratedNever();
            builder.Property(x => x.Level).HasColumnName(@"Level").ValueGeneratedNever();
            builder.Property(x => x.IsHidden).HasColumnName(@"IsHidden").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.TenantId).HasColumnName(@"TenantId").ValueGeneratedNever();
            builder.HasKey(@"Id");
            builder.HasOne(x => x.RouteDefinition).WithMany(op => op.Routes).IsRequired(true).HasForeignKey(@"RouteDefinitionId");
            builder.HasOne(x => x.Parent).WithMany(op => op.Children).IsRequired(false).HasForeignKey(@"ParentId");

            builder.ConfigureAuditedAggregateRoot();
            builder.HasIndex(x => x.CreationTime);

            CustomizeConfiguration(builder);
        }

        #region Partial Methods

        partial void CustomizeConfiguration(EntityTypeBuilder<Route> builder);

        #endregion
    }

}
