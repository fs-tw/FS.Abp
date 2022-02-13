using Volo.Abp.Autofac;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Entity.EntityDefaults;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(EntityDefaultsHttpApiClientModule),
    typeof(AbpHttpClientIdentityModelModule)
    )]
public class EntityDefaultsConsoleApiClientModule : AbpModule
{

}
