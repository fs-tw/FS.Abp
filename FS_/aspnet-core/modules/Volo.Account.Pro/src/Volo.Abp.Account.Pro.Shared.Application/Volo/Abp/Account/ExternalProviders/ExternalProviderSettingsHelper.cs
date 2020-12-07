using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Volo.Abp.Account.Settings;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Json;
using Volo.Abp.MultiTenancy;
using Volo.Abp.SettingManagement;
using Volo.Abp.Settings;

namespace Volo.Abp.Account.ExternalProviders
{
    public class ExternalProviderSettingsHelper : ITransientDependency
    {
        private readonly ICurrentTenant _currentTenant;
        private readonly AbpExternalProviderOptions _externalProviderOptions;
        private readonly ISettingManager _settingManager;
        private readonly IJsonSerializer _jsonSerializer;

        public ExternalProviderSettingsHelper(
            ICurrentTenant currentTenant,
            IOptions<AbpExternalProviderOptions> externalProvidersOptions,
            ISettingManager settingManager,
            IJsonSerializer jsonSerializer)
        {
            _currentTenant = currentTenant;
            _externalProviderOptions = externalProvidersOptions.Value;
            _settingManager = settingManager;
            _jsonSerializer = jsonSerializer;
        }

        public virtual async Task<List<ExternalProviderSettings>> GetAllAsync()
        {
            var allSettings = new List<ExternalProviderSettings>();

            List<ExternalProviderSettings> hostSettingsList;
            using (_currentTenant.Change(null))
            {
                hostSettingsList = await GetSettingsListOrNullAsync(GlobalSettingValueProvider.ProviderName, null);
            }

            var settingsList = _currentTenant.IsAvailable
                ? await GetSettingsListOrNullAsync(TenantSettingValueProvider.ProviderName, _currentTenant.Id?.ToString())
                : hostSettingsList;

            foreach (var externalProviderDefinition in _externalProviderOptions.Definitions)
            {
                var newSettings = CreateSettings(externalProviderDefinition);
                var existSettings = settingsList?.FirstOrDefault(x => x.Name == externalProviderDefinition.Name);
                if (existSettings != null)
                {
                    CloneSettings(existSettings, newSettings);
                }

                if (_currentTenant.IsAvailable)
                {
                    newSettings.Enabled = hostSettingsList?.FirstOrDefault(x => x.Name == externalProviderDefinition.Name)?.Enabled
                                          ?? false;
                }

                allSettings.Add(newSettings);
            }

            return allSettings;
        }

        public virtual async Task<ExternalProviderSettings> GetByNameAsync(string name, bool fallBackToHost = false)
        {
            var definition = _externalProviderOptions.Definitions.FirstOrDefault(x => x.Name == name);
            if (definition == null)
            {
                throw new Exception($"External provider with {name} not definition!");
            }

            if (_currentTenant.IsAvailable)
            {
                var settings = await GetSettingsAsync(definition, TenantSettingValueProvider.ProviderName, _currentTenant.Id?.ToString());

                if (settings.IsValid() || !fallBackToHost)
                {
                    return settings;
                }
            }

            return await GetSettingsAsync(definition, GlobalSettingValueProvider.ProviderName, null);;
        }

        public virtual ExternalProviderDefinition GetDefinitionsByNameOrNull(string name)
        {
           return _externalProviderOptions.Definitions.FirstOrDefault(x => x.Name == name);
        }

        public virtual async Task SetAsync(ExternalProviderSettings settings)
        {
            var definition = _externalProviderOptions.Definitions.FirstOrDefault(x => x.Name == settings.Name);
            if (definition == null)
            {
                throw new Exception($"External provider with {settings.Name} not definition!");
            }

            var newSettings = CreateSettings(definition);

            CloneSettings(settings, newSettings);

            if (_currentTenant.IsAvailable)
            {
                newSettings.Enabled = true;
            }

            var existSettingsList = (_currentTenant.IsAvailable
                ? await GetSettingsListOrNullAsync(TenantSettingValueProvider.ProviderName, _currentTenant.Id?.ToString())
                : await GetSettingsListOrNullAsync(GlobalSettingValueProvider.ProviderName, null)) ?? new List<ExternalProviderSettings>();

            existSettingsList.RemoveAll(x => x.Name == definition.Name);
            existSettingsList.Add(newSettings);

            if (_currentTenant.IsAvailable)
            {
                await _settingManager.SetForCurrentTenantAsync(AccountSettingNames.ExternalProviders, _jsonSerializer.Serialize(existSettingsList));
            }
            else
            {
                await _settingManager.SetGlobalAsync(AccountSettingNames.ExternalProviders, _jsonSerializer.Serialize(existSettingsList));
            }
        }

        protected virtual async Task<ExternalProviderSettings> GetSettingsAsync(
            ExternalProviderDefinition definition,
            string providerName,
            string providerKey)
        {
            var newSettings = CreateSettings(definition);

            var settingsList = await GetSettingsListOrNullAsync(providerName, providerKey);
            var existSettings = settingsList?.FirstOrDefault(x => x.Name == definition.Name);
            if (existSettings != null)
            {
                CloneSettings(existSettings, newSettings);
            }

            return newSettings;
        }

        protected virtual async Task<List<ExternalProviderSettings>> GetSettingsListOrNullAsync(
            string providerName,
            string providerKey)
        {
            var settings = await _settingManager.GetOrNullAsync(AccountSettingNames.ExternalProviders, providerName,  providerKey, fallback: false);
            return settings.IsNullOrWhiteSpace() ? null : _jsonSerializer.Deserialize<List<ExternalProviderSettings>>(settings);
        }

        protected virtual ExternalProviderSettings CreateSettings(ExternalProviderDefinition definition)
        {
            return new ExternalProviderSettings
            {
                Name = definition.Name,
                Enabled = false,

                Properties = definition.Properties.
                    Where(x => !x.IsSecret).
                    Select(x => new ExternalProviderSettingsProperty(x.PropertyName, null)).
                    ToList(),

                SecretProperties = definition.Properties.
                    Where(x => x.IsSecret).
                    Select(x => new ExternalProviderSettingsProperty(x.PropertyName, null)).
                    ToList()
            };
        }

        protected virtual void CloneSettings(ExternalProviderSettings source, ExternalProviderSettings dest)
        {
            dest.Name = source.Name;
            dest.Enabled = source.Enabled;
            foreach (var item in dest.Properties)
            {
                item.Value = source.Properties.FirstOrDefault(x => x.Name.Equals(item.Name, StringComparison.InvariantCultureIgnoreCase))?.Value;
            }
            foreach (var item in dest.SecretProperties)
            {
                item.Value = source.SecretProperties.FirstOrDefault(x => x.Name.Equals(item.Name, StringComparison.InvariantCultureIgnoreCase))?.Value;
            }
        }
    }
}
