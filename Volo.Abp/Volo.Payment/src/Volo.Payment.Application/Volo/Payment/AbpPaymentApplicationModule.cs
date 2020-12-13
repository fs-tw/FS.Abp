using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;

namespace Volo.Payment
{
    [DependsOn(
        typeof(AbpPaymentDomainModule),
        typeof(AbpPaymentApplicationContractsModule),
        typeof(AbpAutoMapperModule)
        )]
    public class AbpPaymentApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<AbpPaymentApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<PaymentApplicationAutoMapperProfile>(validate: true);
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<AbpPaymentApplicationModule>(context);
        }
    }
}
