using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.MultiTenancy;
using FS.CodingManagement.Data;

namespace FS.CodingManagement
{
    public class DefaultDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IGuidGenerator _guidGenerator;
        private readonly ICurrentTenant _currentTenant;
        private readonly IAbpLazyServiceProvider _lazyServiceProvider;
        private readonly CreateTreeCodeDataSeed _createParentCodeDataSeed;

        public DefaultDataSeedContributor(
            IGuidGenerator guidGenerator, ICurrentTenant currentTenant,
             CreateTreeCodeDataSeed createParentCodeDataSeed,
        IAbpLazyServiceProvider lazyServiceProvider)
        {
            _guidGenerator = guidGenerator;
            _currentTenant = currentTenant;
            _lazyServiceProvider = lazyServiceProvider;
            _createParentCodeDataSeed = createParentCodeDataSeed;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            using (_currentTenant.Change(context?.TenantId))
            {

                await _createParentCodeDataSeed.ExecuteAsync();
            }
        }
    }
}
