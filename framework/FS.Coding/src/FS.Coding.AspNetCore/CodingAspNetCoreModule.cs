using Localization.Resources.AbpUi;
using FS.Coding.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Coding;

[DependsOn(
    typeof(CodingApplicationContractsModule),
    typeof(EntityFrameworkCore.CodingEntityFrameworkCoreModule),
    typeof(CodingHttpApiModule)
    )]
public class CodingAspNetCoreModule : AbpModule
{

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
        });

        Configure<Volo.Abp.AspNetCore.Mvc.AbpAspNetCoreMvcOptions>(options =>
        {
            options.ConventionalControllers.Create(typeof(FS.Coding.CodingApplicationModule).Assembly, actionOptions =>
            {
                actionOptions.RemoteServiceName=FS.Coding.CodingRemoteServiceConsts.RemoteServiceName;
                actionOptions.RootPath=FS.Coding.CodingRemoteServiceConsts.ModuleName;
            });
        });
    }
}
