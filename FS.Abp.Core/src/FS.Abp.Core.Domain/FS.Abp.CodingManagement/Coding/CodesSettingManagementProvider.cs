using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;
using Volo.Abp.SettingManagement;
using Volo.Abp.Settings;

namespace FS.Abp.CodingManagement.Coding
{
    public class CodesSettingManagementProvider : SettingManagementProvider, ITransientDependency
    {
        public override string Name => CodesSettingValueProvider.ProviderName;

        protected ICurrentCodes CurrentCodes { get; }

        public CodesSettingManagementProvider(
            ISettingManagementStore settingManagementStore,
            ICurrentCodes currentCodes
            )
            : base(settingManagementStore)
        {
            CurrentCodes = currentCodes;
        }

        protected override string NormalizeProviderKey(string providerKey)
        {
            return providerKey;
            //if (providerKey != null)
            //{
            //    return providerKey;
            //}

            //return CurrentRoomType.Id?.ToString();
        }
    }
}