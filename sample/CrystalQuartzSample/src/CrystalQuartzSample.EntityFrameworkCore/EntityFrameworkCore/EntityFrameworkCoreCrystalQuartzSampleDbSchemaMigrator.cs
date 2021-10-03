using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using CrystalQuartzSample.Data;
using Volo.Abp.DependencyInjection;

namespace CrystalQuartzSample.EntityFrameworkCore
{
    public class EntityFrameworkCoreCrystalQuartzSampleDbSchemaMigrator
        : ICrystalQuartzSampleDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreCrystalQuartzSampleDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the CrystalQuartzSampleDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<CrystalQuartzSampleDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}
