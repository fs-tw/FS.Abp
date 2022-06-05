using Volo.Abp.Autofac;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Coding;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(CodingHttpApiClientModule),
    typeof(AbpHttpClientIdentityModelModule)
    )]
public class CodingConsoleApiClientModule : AbpModule
{

}
