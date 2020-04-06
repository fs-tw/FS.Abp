﻿using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Authorization;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule),
        typeof(FS.Abp.Application.AbpDddApplicationContractsModule),
        typeof(FS.Abp.Trees.TreesApplicationContractsModule),
        typeof(FS.DynamicForm.DynamicFormApplicationContractsModule)
        )]
    public class CmsApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<CmsApplicationContractsModule>("FS.Cms");
            });
        }
    }
}
