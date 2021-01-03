using Volo.Abp.Modularity;


namespace FS.Abp.Line.Notify
{
    [DependsOn(
        typeof(AbpLineNotifyDomainModule)
        )]
    public class AbpLineNotifyHttpApiModule: AbpModule
    {
    }
}
