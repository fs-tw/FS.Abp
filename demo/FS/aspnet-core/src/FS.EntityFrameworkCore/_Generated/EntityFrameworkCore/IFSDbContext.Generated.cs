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
namespace FS.EntityFrameworkCore
{
    [ConnectionStringName(FSDbProperties.ConnectionStringName)]
    public partial interface IFSDbContext : IEfCoreDbContext
    {
        DbSet<FS.Customers.Person> People { get; set; }
        DbSet<FS.Customers.Company> Companies { get; set; }
        DbSet<FS.Customers.Customer> Customers { get; set; }
    }
}