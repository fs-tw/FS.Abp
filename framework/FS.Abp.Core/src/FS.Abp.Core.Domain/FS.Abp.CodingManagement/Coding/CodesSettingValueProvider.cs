using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Settings;

namespace FS.Abp.CodingManagement.Coding
{
    public class CodesSettingValueProvider : SettingValueProvider
    {
        public const string ProviderName = "Codes";
        public override string Name => ProviderName;

        protected ICurrentCodes CurrentCodes { get; }

        public CodesSettingValueProvider(
            ISettingStore settingStore,
            ICurrentCodes currentCodes
            )
            : base(settingStore)
        {
            CurrentCodes = currentCodes;
        }

        public override async Task<string> GetOrNullAsync(SettingDefinition setting)
        {
            /* Return the setting value or null
               Use the SettingStore or another data source */
            return await SettingStore.GetOrNullAsync(setting.Name, Name, CurrentCodes.Id?.ToString());
        }

        public override async Task<List<SettingValue>> GetAllAsync(SettingDefinition[] settings)
        {
            return await SettingStore.GetAllAsync(settings.Select(x => x.Name).ToArray(), Name, CurrentCodes.Id?.ToString());
        }
    }
}
