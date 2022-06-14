using Volo.Abp.Domain;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.VirtualFileSystem;
using FS.CodingManagement;

namespace FS.CrmKitManagement;

[DependsOn(typeof(FS.Coding.CodingApplicationModule))]

[DependsOn(
    typeof(CodingManagementDomainModule),
    typeof(CodingManagementApplicationContractsModule)
)]

public class CodingManagementIntegrationServicesModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<CodingManagementIntegrationServicesModule>();
        });

        context.Services.AddAbpMediatR<CodingManagementIntegrationServicesModule>();
    }
}
