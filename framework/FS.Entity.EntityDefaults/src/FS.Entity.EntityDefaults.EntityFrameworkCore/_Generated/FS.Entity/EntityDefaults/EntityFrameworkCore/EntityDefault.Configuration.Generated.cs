﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 4.4.4
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

namespace FS.Entity.EntityDefaults.EntityFrameworkCore
{
    public partial class EntityDefaultConfiguration : IEntityTypeConfiguration<EntityDefault> //auto-generated
    {
        private string tablePrefix;
        private string schema;
        public EntityDefaultConfiguration(string tablePrefix, string schema)
        {
            this.tablePrefix = tablePrefix;
            this.schema = schema;
        }
        public void Configure(EntityTypeBuilder<EntityDefault> builder)
        {
            builder.ToTable(tablePrefix + @"EntityDefaults", schema);
            builder.Property<Guid>(@"Id").HasColumnName(@"Id").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.EntityType).HasColumnName(@"EntityType").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.EntityId).HasColumnName(@"EntityId").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.DefaultType).HasColumnName(@"DefaultType").IsRequired().ValueGeneratedNever();
            builder.HasKey(@"Id");

            builder.ConfigureAuditedAggregateRoot();
            builder.HasIndex(x => x.CreationTime);

            CustomizeConfiguration(builder);
        }

        partial void CustomizeConfiguration(EntityTypeBuilder<EntityDefault> builder);
    }
    public static partial class EntityDefaultQueryableExtensions //auto-generated
    {
        public static IQueryable<EntityDefault> IncludeDetails(this IQueryable<EntityDefault> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }

            IQueryable<EntityDefault> result = queryable
                .Include(x => x.EntityItems);

            CustomizeIncludeDetails(ref result);

            return result;
        }

        static partial void CustomizeIncludeDetails(ref IQueryable<EntityDefault> query);
    }
}