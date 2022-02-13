using Volo.Abp.Autofac;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Entity.MultiLinguals;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(MultiLingualsHttpApiClientModule),
    typeof(AbpHttpClientIdentityModelModule)
    )]
public class MultiLingualsConsoleApiClientModule : AbpModule
{

}
