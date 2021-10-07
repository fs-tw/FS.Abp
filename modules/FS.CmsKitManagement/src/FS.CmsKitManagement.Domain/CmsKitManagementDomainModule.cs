﻿
using FS.CmsKitManagement.Contents;
using FS.CmsKitManagement.MediaDescriptors;
using FS.CmsKitManagement.MultiLinguals;
using FS.CmsKitManagement.Shapes;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(CmsKitManagementDomainSharedModule)
    )]
    [DependsOn(typeof(EasyAbp.Abp.Trees.AbpTreesDomainModule))]
    [DependsOn(typeof(FS.Abp.AbpDomainModule))]
    [DependsOn(typeof(FS.Abp.EntityTypes.EntityTypesDomainModule))]
    [DependsOn(typeof(Volo.CmsKit.CmsKitDomainModule))]
    public class CmsKitManagementDomainModule : AbpModule
    {
    }
}
