using FS.Abp.Coding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Settings;

namespace FS.Abp.EntitySettings
{
    public class EntitySettingValueProvider : SettingValueProvider
    {
        public const string ProviderName = "EntitySetting";
        public override string Name => ProviderName;

        protected ICurrentEntitySetting CurrentEntitySetting { get; }

        public EntitySettingValueProvider(
            ISettingStore settingStore,
            ICurrentEntitySetting currentCodes
            )
            : base(settingStore)
        {
            CurrentEntitySetting = currentCodes;
        }

        public override async Task<string> GetOrNullAsync(SettingDefinition setting)
        {
            /* Return the setting value or null
               Use the SettingStore or another data source */
            return await SettingStore.GetOrNullAsync(setting.Name, Name, CurrentEntitySetting.ToString());
        }

        public override async Task<List<SettingValue>> GetAllAsync(SettingDefinition[] settings)
        {
            return await SettingStore.GetAllAsync(settings.Select(x => x.Name).ToArray(), Name, CurrentEntitySetting.ToString());
        }
    }
}
