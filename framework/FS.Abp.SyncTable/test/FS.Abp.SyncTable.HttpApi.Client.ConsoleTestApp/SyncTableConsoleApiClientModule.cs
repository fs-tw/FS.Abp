using Volo.Abp.Autofac;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Abp.SyncTable;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(SyncTableHttpApiClientModule),
    typeof(AbpHttpClientIdentityModelModule)
    )]
public class SyncTableConsoleApiClientModule : AbpModule
{

}
