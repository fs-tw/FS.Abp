using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Volo.Abp.Settings;

namespace Volo.Abp.LeptonTheme.Demo.Data
{
    public class LeptonDemoSettingValueProvider : SettingValueProvider
    {
        // Lepton
        public override string Name => "L";

        private readonly IHttpContextAccessor _httpContextAccessor;

        public LeptonDemoSettingValueProvider(
            ISettingStore settingStore,
            IHttpContextAccessor httpContextAccessor
            ) : base(settingStore)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public override Task<string> GetOrNullAsync(SettingDefinition setting)
        {
            return Task.FromResult(GetSettingValueFromHttpCookiesOrNull(setting));
        }

        public override Task<List<SettingValue>> GetAllAsync(SettingDefinition[] settings)
        {
            return Task.FromResult(settings.Select(x => new SettingValue(x.Name, GetSettingValueFromHttpCookiesOrNull(x))).ToList());
        }

        protected string GetSettingValueFromHttpCookiesOrNull(SettingDefinition setting)
        {
            return _httpContextAccessor.HttpContext?.Request?.Cookies[setting.Name.Replace('.', '_')];
        }
    }
}
