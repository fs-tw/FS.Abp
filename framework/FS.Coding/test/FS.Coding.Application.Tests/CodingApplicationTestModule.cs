using Volo.Abp.Modularity;

namespace FS.Coding;

[DependsOn(
    typeof(CodingApplicationModule),
    typeof(CodingDomainTestModule)
    )]
public class CodingApplicationTestModule : AbpModule
{

}
