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
    public partial class RouteDefinitionConfiguration : IEntityTypeConfiguration<RouteDefinition>
    {
        private CmsKitManagementModelBuilderConfigurationOptions options;
        public RouteDefinitionConfiguration(CmsKitManagementModelBuilderConfigurationOptions options)
        {
            this.options = options;
        }
        public void Configure(EntityTypeBuilder<RouteDefinition> builder)
        {
            builder.ToTable(options.TablePrefix + @"RouteDefinitions", options.Schema);
            builder.Property<Guid>(@"Id").HasColumnName(@"Id").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.No).HasColumnName(@"No").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.DisplayName).HasColumnName(@"DisplayName").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.TenantId).HasColumnName(@"TenantId").ValueGeneratedNever();
            builder.HasKey(@"Id");

            builder.ConfigureAuditedAggregateRoot();
            builder.HasIndex(x => x.CreationTime);

            CustomizeConfiguration(builder);
        }

        #region Partial Methods

        partial void CustomizeConfiguration(EntityTypeBuilder<RouteDefinition> builder);

        #endregion
    }

}
