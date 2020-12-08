using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Features;
using Volo.Saas.Tenants;

namespace Volo.Saas.Features
{
    public class TenantEditionFeatureValueProvider : FeatureManagementProvider, ITransientDependency
    {
        public override string Name => "TE";

        protected ITenantRepository TenantRepository  { get; }

        public TenantEditionFeatureValueProvider(
            IFeatureManagementStore store,
            ITenantRepository tenantRepository)
            : base(store)
        {
            TenantRepository = tenantRepository;
        }

        public override bool Compatible(string providerName)
        {
            return providerName == TenantFeatureValueProvider.ProviderName || base.Compatible(providerName);
        }

        public async override Task<string> GetOrNullAsync(FeatureDefinition feature, string providerKey)
        {
            return await Store.GetOrNullAsync(feature.Name, EditionFeatureValueProvider.ProviderName, NormalizeProviderKey(providerKey));
        }

        public async override Task SetAsync(FeatureDefinition feature, string value, string providerKey)
        {
            await Store.SetAsync(feature.Name, value, EditionFeatureValueProvider.ProviderName, NormalizeProviderKey(providerKey));
        }

        public async override Task ClearAsync(FeatureDefinition feature, string providerKey)
        {
            await Store.DeleteAsync(feature.Name, EditionFeatureValueProvider.ProviderName, NormalizeProviderKey(providerKey));
        }

        protected override string NormalizeProviderKey(string providerKey)
        {
            if (providerKey == null)
            {
                return null;
            }

            if (Guid.TryParse(providerKey, out var parsedTenantId))
            {
                var tenant = TenantRepository.FindById(parsedTenantId);
                return tenant?.EditionId?.ToString();
            }

            return null;
        }
    }
}
