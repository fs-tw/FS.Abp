using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Saas.Editions;
using Volo.Saas.Tenants;

namespace Volo.Saas.MongoDB
{
    [ConnectionStringName(SaasDbProperties.ConnectionStringName)]
    public interface ISaasMongoDbContext : IAbpMongoDbContext
    {
        IMongoCollection<Tenant> Tenants { get; }

        IMongoCollection<Edition> Editions { get; }
    }
}
