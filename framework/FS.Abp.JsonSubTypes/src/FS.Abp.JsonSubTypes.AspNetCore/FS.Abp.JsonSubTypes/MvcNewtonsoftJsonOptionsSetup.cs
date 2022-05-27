using System;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using FS.Abp.JsonSubTypes;
using System.Linq;
using JsonSubTypes;

namespace FS.Abp.JsonSubTypes;

public class MvcNewtonsoftJsonOptionsSetup : IConfigureOptions<MvcNewtonsoftJsonOptions>
{
    protected IEnumerable<IJsonSubtypesConverterProfile> Profiles { get; }

    public MvcNewtonsoftJsonOptionsSetup(IEnumerable<IJsonSubtypesConverterProfile> profiles)
    {
        Profiles = profiles;
    }

    public void Configure(MvcNewtonsoftJsonOptions options)
    {
        Profiles.ToList().ForEach(profile =>
        {
            profile.JsonSubtypesConverterDefinitions.ForEach(definition =>
            {
                var item = JsonSubtypesConverterBuilder.Of(definition.BaseType, definition.DiscriminatorProperty).SetFallbackSubtype(definition.FallbackSubtype);
                
                definition.Subtypes.ForEach(subtypeOption =>
                {
                    item.RegisterSubtype(subtypeOption.Subtype, subtypeOption.value);
                });

                options.SerializerSettings.Converters.Add(item.Build());
            });
        });
    }
}
