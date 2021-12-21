using Localization.Resources.AbpUi;
using FS.CmsKitManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Volo.Abp.AspNetCore.Mvc.Conventions;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(CmsKitManagementApplicationModule),
        typeof(CmsKitManagementHttpApiModule))]
    [DependsOn(typeof(FS.Abp.EntityFeatures.AbpEntityFeaturesAspNetCoreModule))]
    public class CmsKitManagementAspNetCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(CmsKitManagementApplicationModule).Assembly, c =>
                 {
                     c.RootPath = CmsKitManagementApplicationConsts.RootPath;
                     c.RemoteServiceName = CmsKitManagementApplicationConsts.RemoteServiceName;
                 });
            });
        }
    }
}
