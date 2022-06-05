using Localization.Resources.AbpUi;
using FS.Coding.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Coding.Codes;

[DependsOn(
    typeof(CodesApplicationModule),
    typeof(FS.Coding.Codes.EntityFrameworkCore.CodesEntityFrameworkCoreModule),
    typeof(FS.Coding.Codes.CodesHttpApiModule)
    )]
[DependsOn(typeof(FS.Coding.CodingAspNetCoreModule))]
public class CodesAspNetCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
        });

        Configure<Volo.Abp.AspNetCore.Mvc.AbpAspNetCoreMvcOptions>(options =>
        {
            options.ConventionalControllers.Create(typeof(FS.Coding.Codes.CodesApplicationModule).Assembly, actionOptions =>
            {
                actionOptions.RemoteServiceName=FS.Coding.CodingRemoteServiceConsts.RemoteServiceName;
                actionOptions.RootPath=FS.Coding.CodingRemoteServiceConsts.ModuleName;
            });
        });
    }
}
