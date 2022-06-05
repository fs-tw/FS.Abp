using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Coding.Codes;

[DependsOn(
    typeof(CodesDomainSharedModule)
)]
[DependsOn(typeof(FS.Coding.CodingDomainModule))]
public class CodesDomainModule : AbpModule
{

}
