using FS.Abp.Json.Newtonsoft;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Json.Newtonsoft;
using Volo.Abp.Modularity;

namespace FS.Abp.Json
{
    [System.Obsolete("remove")]
    [DependsOn(
        typeof(Volo.Abp.Json.AbpJsonModule)
        )]
    public class AbpJsonModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpNewtonsoftJsonSerializerOptions>(options =>
            {
                options.Converters.Add<ExtraPropertyDictionaryConverter>();
            });
        }
    }
}
