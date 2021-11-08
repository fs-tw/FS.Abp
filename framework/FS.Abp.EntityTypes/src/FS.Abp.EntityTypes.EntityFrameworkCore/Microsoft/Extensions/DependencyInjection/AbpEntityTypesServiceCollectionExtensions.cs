using FS.Abp.EntityTypes.EntityFrameworkCore;
using System;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class AbpEntityTypesServiceCollectionExtensions
    {

        public static IServiceCollection AddEntityTypeRepository(
            this IServiceCollection services,Type dbContextType)
        {
            var options = new AbpEntityTypeRepositoryRegistrationOptions(dbContextType, services);

            new EfCoreEntityTypeRepositoryRegistrar(options).AddRepositories();

            return services;
        }
    }
}
