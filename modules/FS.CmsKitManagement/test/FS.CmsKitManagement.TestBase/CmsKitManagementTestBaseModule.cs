using FS.Abp.EntityFeatures;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Authorization;
using Volo.Abp.Autofac;
using Volo.Abp.Data;
using Volo.Abp.Modularity;
using Volo.Abp.Threading;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(AbpTestBaseModule),
        typeof(AbpAuthorizationModule),
        typeof(CmsKitManagementDomainModule)
        )]
    public class CmsKitManagementTestBaseModule : AbpModule
    {

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<EntityFeaturesOptions>(options =>
            {
                options.GetOrAdd<FS.CmsKitManagement.MultiLinguals.MultiLingual>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Pages.Page>();
                });

                options.GetOrAdd<FS.CmsKitManagement.Contents.ContentDefinition>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Pages.Page>();
                });
            });

            context.Services.AddAlwaysAllowAuthorization();
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            SeedTestData(context);
        }

        private static void SeedTestData(ApplicationInitializationContext context)
        {
            AsyncHelper.RunSync(async () =>
            {
                using (var scope = context.ServiceProvider.CreateScope())
                {
                    await scope.ServiceProvider
                        .GetRequiredService<IDataSeeder>()
                        .SeedAsync();
                }
            });
        }
    }
}
