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
        private readonly CreateParentCodeDataSeed _createParentCodeDataSeed;
        private readonly CreateChildrenCodeDataSeed _createChildrenCodeDataSeed;

        public DefaultDataSeedContributor(
            IGuidGenerator guidGenerator, ICurrentTenant currentTenant,
             CreateParentCodeDataSeed createParentCodeDataSeed,
             CreateChildrenCodeDataSeed createChildrenCodeDataSeed,
        IAbpLazyServiceProvider lazyServiceProvider)
        {
            _guidGenerator = guidGenerator;
            _currentTenant = currentTenant;
            _lazyServiceProvider = lazyServiceProvider;
            _createParentCodeDataSeed = createParentCodeDataSeed;
            _createChildrenCodeDataSeed = createChildrenCodeDataSeed;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            using (_currentTenant.Change(context?.TenantId))
            {

                await _createParentCodeDataSeed.ExecuteAsync();
                //await _createChildrenCodeDataSeed.ExecuteAsync();
            }
        }
    }
}
