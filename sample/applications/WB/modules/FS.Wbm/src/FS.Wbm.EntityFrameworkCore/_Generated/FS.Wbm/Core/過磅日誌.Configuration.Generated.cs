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
using FS.Wbm.EntityFrameworkCore;

namespace FS.Wbm.Core
{
    public partial class 過磅日誌Configuration : IEntityTypeConfiguration<過磅日誌>
    {
        private WbmModelBuilderConfigurationOptions options;
        public 過磅日誌Configuration(WbmModelBuilderConfigurationOptions options)
        {
            this.options = options;
        }
        public void Configure(EntityTypeBuilder<過磅日誌> builder)
        {
            builder.ToTable(options.TablePrefix + @"過磅日誌", options.Schema);
            builder.Property<long>(@"Id").HasColumnName(@"識別碼").HasColumnType(@"bigint").IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.日期).HasColumnName(@"日期").HasColumnType(@"datetime").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.時間).HasColumnName(@"時間").HasColumnType(@"datetime").IsRequired().ValueGeneratedNever();
            builder.Property(x => x.內容).HasColumnName(@"內容").HasColumnType(@"nvarchar(50)").IsRequired().ValueGeneratedNever().HasMaxLength(50);
            builder.Property(x => x.操作者).HasColumnName(@"操作者").HasColumnType(@"nvarchar(10)").IsRequired().ValueGeneratedNever().HasMaxLength(10);
            builder.HasKey(@"Id");

            CustomizeConfiguration(builder);
        }

        #region Partial Methods

        partial void CustomizeConfiguration(EntityTypeBuilder<過磅日誌> builder);

        #endregion
    }

}
