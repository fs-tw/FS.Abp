using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Volo.Payment.EntityFrameworkCore
{
    [DependsOn(
        typeof(AbpPaymentDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    public class AbpPaymentEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<PaymentDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<AbpPaymentEntityFrameworkCoreModule>(context);
        }
    }
}