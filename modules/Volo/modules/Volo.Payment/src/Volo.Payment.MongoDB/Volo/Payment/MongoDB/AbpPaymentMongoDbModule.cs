using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;
using Volo.Payment.Requests;

namespace Volo.Payment.MongoDB
{
    [DependsOn(
        typeof(AbpPaymentDomainModule),
        typeof(AbpMongoDbModule)
        )]
    public class AbpPaymentMongoDbModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMongoDbContext<PaymentMongoDbContext>(options =>
            {
                options.AddDefaultRepositories<IPaymentMongoDbContext>();

                options.AddRepository<PaymentRequest, MongoPaymentRequestRepository>();
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<AbpPaymentMongoDbModule>(context);
        }
    }
}
