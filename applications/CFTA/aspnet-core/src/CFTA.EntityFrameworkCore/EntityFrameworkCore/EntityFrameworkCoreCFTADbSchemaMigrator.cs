using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using CFTA.Data;
using Volo.Abp.DependencyInjection;

namespace CFTA.EntityFrameworkCore
{
    public class EntityFrameworkCoreCFTADbSchemaMigrator
        : ICFTADbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreCFTADbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the CFTADbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<CFTADbContext>()
                .Database
                .MigrateAsync();
        }
    }
}
