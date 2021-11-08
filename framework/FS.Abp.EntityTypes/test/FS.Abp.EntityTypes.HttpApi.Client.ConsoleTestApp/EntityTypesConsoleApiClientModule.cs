using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityTypes
{
    [DependsOn(
        typeof(EntityTypesHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class EntityTypesConsoleApiClientModule : AbpModule
    {
        
    }
}
