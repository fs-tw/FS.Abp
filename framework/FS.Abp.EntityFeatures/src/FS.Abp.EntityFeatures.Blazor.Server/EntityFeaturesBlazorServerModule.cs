﻿using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityFeatures.Blazor.Server
{
    [DependsOn(
        typeof(AbpAspNetCoreComponentsServerThemingModule),
        typeof(EntityFeaturesBlazorModule)
        )]
    public class EntityFeaturesBlazorServerModule : AbpModule
    {
        
    }
}