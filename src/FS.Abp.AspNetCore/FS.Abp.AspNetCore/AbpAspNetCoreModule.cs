using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Modularity;
using Volo.Abp.AspNetCore.MultiTenancy;

namespace FS.Abp.AspNetCore
{
    [DependsOn(
        typeof(AbpAspNetCoreMultiTenancyModule),
        typeof(SwaggerDoc.AbpSwaggerDocModule),
        typeof(Authentication.AbpAuthenticationModule)
        )]
    public class AbpAspNetCoreModule : AbpModule
    {
    }
}
