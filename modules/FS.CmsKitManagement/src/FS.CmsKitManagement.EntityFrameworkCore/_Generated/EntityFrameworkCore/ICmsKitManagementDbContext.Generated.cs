﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 4.4.3
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
namespace FS.CmsKitManagement.EntityFrameworkCore
{
    [ConnectionStringName(CmsKitManagementDbProperties.ConnectionStringName)]
    public partial interface ICmsKitManagementDbContext : IEfCoreDbContext
    {
        DbSet<FS.CmsKitManagement.MediaDescriptors.AttachmentMedia> AttachmentMedia { get; set; }
        DbSet<FS.CmsKitManagement.Contents.ContentDefinition> ContentDefinitions { get; set; }
        DbSet<FS.CmsKitManagement.Contents.ContentType> ContentTypes { get; set; }
        DbSet<FS.CmsKitManagement.Contents.EntityContent> EntityContents { get; set; }
        DbSet<FS.CmsKitManagement.Contents.EntityContentDefinition> EntityContentDefinitions { get; set; }
        DbSet<FS.CmsKitManagement.Shapes.Shape> Shapes { get; set; }
        DbSet<FS.CmsKitManagement.MultiLinguals.MultiLingual> MultiLinguals { get; set; }
        DbSet<FS.CmsKitManagement.MultiLinguals.MultiLingualTranslation> MultiLingualTranslations { get; set; }
    }
}
