using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.Threading;
using Volo.Saas.Editions;
using Volo.Saas.Tenants;

namespace Volo.Saas
{
    public class SaasTestDataBuilder : ITransientDependency
    {
        private readonly ITenantRepository _tenantRepository;
        private readonly IEditionRepository _editionRepository;
        private readonly ITenantManager _tenantManager;
        private readonly IGuidGenerator _guidGenerator;

        public SaasTestDataBuilder(
            IGuidGenerator guidGenerator,
        ITenantRepository tenantRepository,
        IEditionRepository editionRepository,
            ITenantManager tenantManager)
        {
            _guidGenerator = guidGenerator;
            _tenantRepository = tenantRepository;
            _tenantManager = tenantManager;
            _editionRepository = editionRepository;
        }

        public void Build()
        {
            AsyncHelper.RunSync(AddTenantsAsync);
            AsyncHelper.RunSync(AddEditionsAsync);
        }

        protected virtual async Task AddTenantsAsync()
        {
            var acme = await _tenantManager.CreateAsync("acme");
            acme.ConnectionStrings.Add(new TenantConnectionString(acme.Id, ConnectionStrings.DefaultConnectionStringName, "DefaultConnString-Value"));
            acme.ConnectionStrings.Add(new TenantConnectionString(acme.Id, "MyConnString", "MyConnString-Value"));
            await _tenantRepository.InsertAsync(acme);

            var volosoft = await _tenantManager.CreateAsync("volosoft");
            await _tenantRepository.InsertAsync(volosoft);
        }

        protected virtual async Task AddEditionsAsync()
        {
            await _editionRepository.InsertAsync(new Edition(_guidGenerator.Create(), "FirstEdition"));
            await _editionRepository.InsertAsync(new Edition(_guidGenerator.Create(), "SecondEdition"));
        }
    }
}