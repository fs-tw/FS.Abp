using Volo.Abp.Modularity;

namespace FS.Coding.Codes;

[DependsOn(
    typeof(CodesApplicationModule),
    typeof(CodesDomainTestModule)
    )]
public class CodesApplicationTestModule : AbpModule
{

}
