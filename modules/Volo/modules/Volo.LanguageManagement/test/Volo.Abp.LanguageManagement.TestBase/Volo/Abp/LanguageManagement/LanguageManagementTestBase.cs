using Volo.Abp.Modularity;
using Volo.Abp.Testing;

namespace Volo.Abp.LanguageManagement
{
    public abstract class LanguageManagementTestBase<TStartupModule> : AbpIntegratedTest<TStartupModule> 
        where TStartupModule : IAbpModule
    {
        protected override void SetAbpApplicationCreationOptions(AbpApplicationCreationOptions options)
        {
            options.UseAutofac();
        }
    }
}
