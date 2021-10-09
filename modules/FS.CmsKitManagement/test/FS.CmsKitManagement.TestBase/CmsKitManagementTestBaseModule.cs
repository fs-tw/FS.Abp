using FS.Abp.EntityTypes;
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
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<EntityTypeOption>(options =>
            {
                options.Entity<FS.CmsKitManagement.MultiLinguals.MultiLingual>(a =>
                {
                    a.AddOrReplaceDefaults(
                        typeof(Volo.CmsKit.Pages.Page)
                        );
                });
            });
        }
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<EntityTypeOption>(options =>
            {
                context.Services.ExecutePreConfiguredActions(options);
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
