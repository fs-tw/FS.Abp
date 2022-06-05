using Volo.Abp.Autofac;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Printer;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(PrinterHttpApiClientModule),
    typeof(AbpHttpClientIdentityModelModule)
    )]
public class PrinterConsoleApiClientModule : AbpModule
{

}
