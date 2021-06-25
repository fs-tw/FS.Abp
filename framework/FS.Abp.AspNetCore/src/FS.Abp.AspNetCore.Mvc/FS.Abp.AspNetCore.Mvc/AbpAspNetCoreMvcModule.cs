using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System.Linq;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using FS.Abp.AspNetCore.Mvc.JsonSubTypes;
using JsonSubTypes;
using Volo.Abp.Json.SystemTextJson;
using System.Text;
using System;

namespace FS.Abp.AspNetCore.Mvc
{
    [DependsOn(typeof(Volo.Abp.AspNetCore.AbpAspNetCoreModule))]
    [DependsOn(typeof(FS.Abp.AspNetCore.Mvc.NewtonsoftJson.AbpAspNetCoreMvcNewtonsoftJsonModule))]
    public class AbpAspNetCoreMvcModule : AbpModule
    {
        
    }
}
