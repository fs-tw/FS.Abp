using Microsoft.Extensions.DependencyInjection;
using System;

namespace FS.Abp.EntityTypes.EntityFrameworkCore
{
    public class AbpEntityTypeRepositoryRegistrationOptions
    {
        public Type OriginalDbContextType { get; }

        public Type DefaultRepositoryDbContextType { get; protected set; }

        public IServiceCollection Services { get; }

        public AbpEntityTypeRepositoryRegistrationOptions(Type originalDbContextType, IServiceCollection services)
        {
            OriginalDbContextType = originalDbContextType;
            DefaultRepositoryDbContextType = originalDbContextType;
            Services = services;

        }
    }
}
