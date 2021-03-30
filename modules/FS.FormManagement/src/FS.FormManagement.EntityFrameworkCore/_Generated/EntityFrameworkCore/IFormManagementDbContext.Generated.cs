﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 4.2.2
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
namespace FS.FormManagement.EntityFrameworkCore
{
    [ConnectionStringName(FormManagementDbProperties.ConnectionStringName)]
    public partial interface IFormManagementDbContext : IEfCoreDbContext
    {
        DbSet<FS.FormManagement.Forms.Formal> Formals { get; set; }
        DbSet<FS.FormManagement.Forms.Group> Groups { get; set; }
        DbSet<FS.FormManagement.Forms.Item> Items { get; set; }
        DbSet<FS.FormManagement.Versions.Version> Versions { get; set; }
        DbSet<FS.FormManagement.Records.Record> Records { get; set; }
        DbSet<FS.FormManagement.Records.RecordItem> RecordItems { get; set; }
        DbSet<FS.FormManagement.Versions.VersionDefinition> VersionDefinitions { get; set; }
    }
}
