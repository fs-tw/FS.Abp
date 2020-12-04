using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;
using Volo.Abp.SettingManagement;
using Volo.Abp.Settings;

namespace FS.Abp.EntitySettings
{
    public class EntitySettingManagementProvider : SettingManagementProvider, ITransientDependency
    {
        public override string Name => EntitySettingValueProvider.ProviderName;

        protected ICurrentEntitySetting CurrentEntitySetting { get; }

        public EntitySettingManagementProvider(
            ISettingManagementStore settingManagementStore,
            ICurrentEntitySetting currentEntitySetting
            )
            : base(settingManagementStore)
        {
            CurrentEntitySetting = currentEntitySetting;
        }

        protected override string NormalizeProviderKey(string providerKey)
        {
            return providerKey;
        }
    }
}