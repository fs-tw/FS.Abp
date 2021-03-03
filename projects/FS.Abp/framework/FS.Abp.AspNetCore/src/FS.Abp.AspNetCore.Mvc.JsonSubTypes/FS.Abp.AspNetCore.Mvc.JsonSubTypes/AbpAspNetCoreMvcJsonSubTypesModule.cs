using JsonSubTypes;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System.Linq;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace FS.Abp.AspNetCore.Mvc.JsonSubTypes
{
    [DependsOn(
        typeof(AbpAspNetCoreMvcModule),
        typeof(AbpAspNetCoreMvcJsonSubTypesContractsModule)
        )]
    public class AbpAspNetCoreMvcJsonSubTypesModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<Volo.Abp.Json.AbpJsonOptions>(options =>
            {
                options.UseHybridSerializer = false;
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<Microsoft.AspNetCore.Mvc.MvcNewtonsoftJsonOptions>(mvcNewtonsoftJsonOptions =>
            {
                using (var serviceProvider = context.Services.BuildServiceProvider())
                {
                    var options = serviceProvider.GetRequiredService<IOptions<JsonSubtypesOptions>>().Value;
                    options.Profiles.ToList().ForEach(profile =>
                    {
                        profile.JsonSubtypesConverterDefinitions.ForEach(definition =>
                        {
                            var item = JsonSubtypesConverterBuilder.Of(definition.BaseType, definition.DiscriminatorProperty).SetFallbackSubtype(definition.FallbackSubtype);
                            definition.Subtypes.ForEach(subtypeOption =>
                            {
                                item.RegisterSubtype(subtypeOption.Subtype, subtypeOption.value);
                            });

                            mvcNewtonsoftJsonOptions.SerializerSettings.Converters.Add(item.Build());
                        });
                    });
                }
            });
        }

    }
}
