using Volo.Abp.Autofac;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Printer.Printing;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(PrintingHttpApiClientModule),
    typeof(AbpHttpClientIdentityModelModule)
    )]
public class PrintingConsoleApiClientModule : AbpModule
{

}
