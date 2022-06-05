using Volo.Abp.Autofac;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Coding.Codes;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(CodesHttpApiClientModule),
    typeof(AbpHttpClientIdentityModelModule)
    )]
public class CodesConsoleApiClientModule : AbpModule
{

}
