using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Coding.Codes;

[DependsOn(
    typeof(CodesDomainSharedModule)
)]
[DependsOn(typeof(FS.Coding.CodingDomainModule))]
[DependsOn(typeof(EasyAbp.Abp.Trees.AbpTreesDomainModule))]
public class CodesDomainModule : AbpModule
{

}
