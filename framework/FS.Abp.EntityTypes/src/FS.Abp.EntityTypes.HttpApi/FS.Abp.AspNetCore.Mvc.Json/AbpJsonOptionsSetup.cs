using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using System;
using FS.Abp.Json.SystemTextJson.JsonConverters;

namespace FS.Abp.AspNetCore.Mvc.Json
{
    public class AbpJsonOptionsSetup : IConfigureOptions<JsonOptions>
    {
        protected IServiceProvider ServiceProvider { get; }

        public AbpJsonOptionsSetup(IServiceProvider serviceProvider)
        {
            ServiceProvider = serviceProvider;
        }

        public void Configure(JsonOptions options)
        {
            options.JsonSerializerOptions.Converters.Add(new PolymorphicJsonConverter<Volo.CmsKit.EntityTypeDefinition>());
        }
    }
}
