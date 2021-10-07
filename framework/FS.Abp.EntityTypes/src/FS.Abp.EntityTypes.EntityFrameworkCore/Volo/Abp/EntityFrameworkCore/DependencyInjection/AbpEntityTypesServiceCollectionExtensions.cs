using Microsoft.Extensions.DependencyInjection;

namespace Volo.Abp.EntityFrameworkCore.DependencyInjection
{
    public static class IEntityTypesAbpDbContextRegistrationOptionsBuilderExtensions
    {
        public static void AddDefaultEntityTypeRepositories(this IAbpDbContextRegistrationOptionsBuilder builder)
        {
            var realOptions = (builder as AbpDbContextRegistrationOptions);

            builder.Services.AddEntityTypeRepository(realOptions.OriginalDbContextType);
        }

    }
}
