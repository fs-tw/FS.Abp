﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 4.4.0
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
using FS.EntityFrameworkCore;

namespace FS.Customers
{
    public partial class CompanyConfiguration : IEntityTypeConfiguration<Company>
    {
        private FSModelBuilderConfigurationOptions options;
        public CompanyConfiguration(FSModelBuilderConfigurationOptions options)
        {
            this.options = options;
        }
        public void Configure(EntityTypeBuilder<Company> builder)
        {
            builder.Property(x => x.Address).HasColumnName(@"Address").IsRequired().ValueGeneratedNever();
            builder.Property<Guid?>(@"TenantId").HasColumnName(@"TenantId").ValueGeneratedNever();

            builder.ConfigureAuditedAggregateRoot();
            builder.HasIndex(x => x.CreationTime);

            CustomizeConfiguration(builder);
        }

        #region Partial Methods

        partial void CustomizeConfiguration(EntityTypeBuilder<Company> builder);

        #endregion
    }

}
