using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using System;

namespace FS.Abp.EntityFeatures
{
    public class JsonOptionsSetup : IConfigureOptions<JsonOptions>
    {
        protected IServiceProvider ServiceProvider { get; }

        public JsonOptionsSetup(IServiceProvider serviceProvider)
        {
            ServiceProvider = serviceProvider;
        }

        public void Configure(JsonOptions options)
        {
            options.JsonSerializerOptions.Converters.Add(new PolymorphicJsonConverter<EntityFeatureDefinition>());
        }
    }
}
