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


namespace FS.Entity.MultiLinguals.EntityFrameworkCore
{
    //[ConnectionStringName(EntityManagementDbProperties.ConnectionStringName)]
    public partial interface IMultiLingualsDbContext : IEfCoreDbContext //auto-generated
    {
        DbSet<FS.Entity.MultiLinguals.MultiLingualTranslation> MultiLingualTranslations { get; set; }
        DbSet<FS.Entity.MultiLinguals.MultiLingual> MultiLinguals { get; set; }
    }
}
