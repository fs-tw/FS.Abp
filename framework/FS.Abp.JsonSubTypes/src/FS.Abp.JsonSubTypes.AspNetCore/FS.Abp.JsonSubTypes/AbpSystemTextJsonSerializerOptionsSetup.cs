using System;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using FS.Abp.JsonSubTypes;
using Volo.Abp.Json.SystemTextJson;
using System.Linq;

namespace FS.Abp.JsonSubTypes;

public class AbpSystemTextJsonSerializerOptionsSetup : IConfigureOptions<AbpSystemTextJsonSerializerOptions>
{
    protected IEnumerable<IJsonSubtypesConverterProfile> Profiles { get; }

    public AbpSystemTextJsonSerializerOptionsSetup(IEnumerable<IJsonSubtypesConverterProfile> profiles)
    {
        Profiles = profiles;
    }

    public void Configure(AbpSystemTextJsonSerializerOptions options)
    {
        Profiles.ToList().ForEach(profile =>
        {
            profile.JsonSubtypesConverterDefinitions.ForEach(definition =>
            {
                options.UnsupportedTypes.Add(definition.BaseType);
            });
        });
    }
}
