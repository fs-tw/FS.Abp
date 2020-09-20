using System;
using Volo.Abp.Data;
using Volo.Abp.Modularity;

namespace FS.Abp.Core.MongoDB
{
    [DependsOn(
        typeof(CoreTestBaseModule),
        typeof(CoreMongoDbModule)
        )]
    public class CoreMongoDbTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var connectionString = MongoDbFixture.ConnectionString.EnsureEndsWith('/') +
                                   "Db_" +
                                    Guid.NewGuid().ToString("N");

            Configure<AbpDbConnectionOptions>(options =>
            {
                options.ConnectionStrings.Default = connectionString;
            });
        }
    }
}