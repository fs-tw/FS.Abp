﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 2.0.1
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
namespace FS.Cms.EntityFrameworkCore
{
    [ConnectionStringName(CmsDbProperties.ConnectionStringName)]
    public partial class CmsDbContext : AbpDbContext<CmsDbContext>, ICmsDbContext
    {

        public virtual DbSet<FS.Cms.Posts.Post> Posts
        {
            get;
            set;
        }

        public virtual DbSet<FS.Cms.Posts.PostTagMap> PostTagMaps
        {
            get;
            set;
        }

        public virtual DbSet<FS.Cms.Documents.DocumentDefinition> DocumentDefinitions
        {
            get;
            set;
        }

        public virtual DbSet<FS.Cms.Documents.Document> Documents
        {
            get;
            set;
        }
        public CmsDbContext(DbContextOptions<CmsDbContext> options) :
            base(options)
        {
            OnCreated();
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ConfigureCms();

            CustomizeMapping(ref builder);

            base.OnModelCreating(builder);
        }

        partial void CustomizeMapping(ref ModelBuilder modelBuilder);

        partial void OnCreated();
    }
}
