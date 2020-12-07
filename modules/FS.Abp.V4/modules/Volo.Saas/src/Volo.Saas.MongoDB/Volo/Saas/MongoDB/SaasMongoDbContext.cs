using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Saas.Editions;
using Volo.Saas.Tenants;

namespace Volo.Saas.MongoDB
{
    [ConnectionStringName(SaasDbProperties.ConnectionStringName)]
    public class SaasMongoDbContext : AbpMongoDbContext, ISaasMongoDbContext
    {
        public IMongoCollection<Tenant> Tenants => Collection<Tenant>();

        public IMongoCollection<Edition> Editions => Collection<Edition>();

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureSaas();
        }
    }
}