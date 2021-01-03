using System;
using Volo.Abp.Modularity;
using Volo.Abp.Settings;

namespace FS.Abp.Line.Notify
{
    [DependsOn(
        typeof(Volo.Abp.SettingManagement.AbpSettingManagementDomainModule)
        )]
    public class AbpLineNotifyDomainModule: AbpModule
    {
    }
}
