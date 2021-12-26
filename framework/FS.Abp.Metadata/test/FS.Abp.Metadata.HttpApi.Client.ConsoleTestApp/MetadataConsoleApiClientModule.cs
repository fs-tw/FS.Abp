using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Abp.Metadata
{
    [DependsOn(
        typeof(MetadataHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class MetadataConsoleApiClientModule : AbpModule
    {
        
    }
}
