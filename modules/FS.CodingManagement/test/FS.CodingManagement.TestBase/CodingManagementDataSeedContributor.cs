using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.MultiTenancy;
using FS.Coding;

namespace FS.CodingManagement
{
    public class CodingManagementDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IGuidGenerator _guidGenerator;
        private readonly ICurrentTenant _currentTenant;
        private readonly IAbpLazyServiceProvider _lazyServiceProvider;

        public CodingManagementDataSeedContributor(
            IGuidGenerator guidGenerator, ICurrentTenant currentTenant,
            IAbpLazyServiceProvider lazyServiceProvider)
        {
            _guidGenerator = guidGenerator;
            _currentTenant = currentTenant;
            _lazyServiceProvider = lazyServiceProvider;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            /* Instead of returning the Task.CompletedTask, you can insert your test data
             * at this point!
             */


            using (_currentTenant.Change(context?.TenantId))
            {
                var codesStore = _lazyServiceProvider.LazyGetRequiredService<FS.Coding.Codes.ICodesStore>();
                var datas = new List<Coding.Codes.Coding>
                {
                    new Coding.Codes.Coding(_guidGenerator.Create()){No = "FS_Str",Value = "fs",DisplayName=""},
                    new Coding.Codes.Coding(_guidGenerator.Create()){No = "FS_Int",Value = "42",DisplayName=""},
                    new Coding.Codes.Coding(_guidGenerator.Create()){No = "FS_Decimal",Value = "42.3",DisplayName=""},
                    new Coding.Codes.Coding(_guidGenerator.Create()){No = "FS_Bool",Value = "true",DisplayName=""}
                };
                await codesStore.Coding.InsertManyAsync(datas);

            }
        }
    }
}
