using System;
using Microsoft.Extensions.DependencyInjection;
using Shouldly;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;
using Xunit;

namespace Volo.Abp.LanguageManagement
{
    public abstract class LanguageManagement_Repository_Resolve_Tests<TStartupModule> : LanguageManagementTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        [Fact] 
        public void Should_Resolve_Repositories()
        {
            ServiceProvider.GetService<IRepository<Language>>().ShouldNotBeNull();
            ServiceProvider.GetService<IRepository<Language, Guid>>().ShouldNotBeNull();
            ServiceProvider.GetService<ILanguageRepository>().ShouldNotBeNull();

            ServiceProvider.GetService<IRepository<LanguageText>>().ShouldNotBeNull();
            ServiceProvider.GetService<IRepository<LanguageText, Guid>>().ShouldNotBeNull();
            ServiceProvider.GetService<ILanguageTextRepository>().ShouldNotBeNull();
        }
    }
}
