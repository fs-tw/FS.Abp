using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using Volo.Abp;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using Volo.Payment.Stripe.Pages;

namespace Volo.Payment.Stripe
{
    [DependsOn(
        typeof(AbpPaymentWebModule)
    )]
    public class AbpPaymentStripeWebModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.TryAddEnumerable(ServiceDescriptor
                .Transient<IConfigureOptions<PaymentWebOptions>, StripePaymentWebOptionsSetup>());

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpPaymentStripeWebModule>();
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<AbpPaymentStripeWebModule>(context);
        }
    }
}
