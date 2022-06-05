﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 5.1.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.ComponentModel;
using System.Reflection;
using System.Data.Common;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.EntityFrameworkCore.Metadata;
using Volo.Abp.DependencyInjection;

namespace FS.CodingManagement.EntityFrameworkCore
{
    [ReplaceDbContext(typeof(FS.Coding.Codes.EntityFrameworkCore.ICodesDbContext))]
    [ReplaceDbContext(typeof(FS.Coding.SerialNumbers.EntityFrameworkCore.ISerialNumbersDbContext))]
    [ConnectionStringName(CodingManagementDbProperties.ConnectionStringName)]
    public partial class CodingManagementDbContext : AbpDbContext<CodingManagementDbContext>, ICodingManagementDbContext
    {

        public virtual DbSet<FS.Coding.Codes.Coding> Codings
        {
            get;
            set;
        }

        public virtual DbSet<FS.Coding.SerialNumbers.SerialNumber> SerialNumbers
        {
            get;
            set;
        }
        public CodingManagementDbContext(DbContextOptions<CodingManagementDbContext> options) :
            base(options)
        {
            OnCreated();
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ConfigureCodingManagement();

            CustomizeMapping(ref builder);

            base.OnModelCreating(builder);
        }

        partial void CustomizeMapping(ref ModelBuilder modelBuilder);

        partial void OnCreated();
    }
}
