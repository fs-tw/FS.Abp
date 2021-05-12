using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using DEMO.Data;
using Volo.Abp.DependencyInjection;

namespace DEMO.EntityFrameworkCore
{
    public class EntityFrameworkCoreDEMODbSchemaMigrator
        : IDEMODbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreDEMODbSchemaMigrator(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the DEMOMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<DEMOMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}