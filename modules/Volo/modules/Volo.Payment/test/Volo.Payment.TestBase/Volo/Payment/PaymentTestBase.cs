using Volo.Abp;
using Volo.Abp.Modularity;
using Volo.Abp.Testing;

namespace Volo.Payment
{
    public abstract class PaymentTestBase<TStartupModule> : AbpIntegratedTest<TStartupModule> 
        where TStartupModule : IAbpModule
    {
        protected override void SetAbpApplicationCreationOptions(AbpApplicationCreationOptions options)
        {
            options.UseAutofac();
        }
    }
}
