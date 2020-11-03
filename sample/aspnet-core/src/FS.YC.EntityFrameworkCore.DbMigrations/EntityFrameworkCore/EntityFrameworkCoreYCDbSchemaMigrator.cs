using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using FS.YC.Data;
using Volo.Abp.DependencyInjection;

namespace FS.YC.EntityFrameworkCore
{
    public class EntityFrameworkCoreYCDbSchemaMigrator
        : IYCDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreYCDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the YCMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<YCMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}