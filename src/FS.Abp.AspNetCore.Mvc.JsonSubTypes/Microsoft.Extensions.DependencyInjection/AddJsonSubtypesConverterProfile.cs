using FS.Abp.AspNetCore.Mvc.JsonSubTypes;
using JsonSubTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Microsoft.Extensions.DependencyInjection
{
    public static partial class IServiceCollectionExtensions
    {
        public static void AddJsonSubtypesConverterProfile<TModule>(this IServiceCollection services)
        {
            services.Configure<Microsoft.AspNetCore.Mvc.MvcNewtonsoftJsonOptions>(mvcNewtonsoftJsonOptions =>
            {
                var converterTypes = typeof(TModule).Assembly
                    .DefinedTypes
                    .Where(type => typeof(IJsonSubtypesConverterProfile).IsAssignableFrom(type) && !type.IsAbstract && !type.IsGenericType);

                converterTypes.ToList().ForEach(converterType =>
                {
                    ((IJsonSubtypesConverterProfile)Activator.CreateInstance(converterType)).JsonSubtypesConverterOptions.ForEach(option =>
                    {
                        var item = JsonSubtypesConverterBuilder.Of(option.BaseType, option.DiscriminatorProperty).SetFallbackSubtype(option.FallbackSubtype);
                        option.Subtypes.ForEach(subtypeOption =>
                        {
                            item.RegisterSubtype(subtypeOption.Subtype, subtypeOption.value);
                        });
                        mvcNewtonsoftJsonOptions.SerializerSettings.Converters.Add(item.Build());
                    });
                });
            });
        }
    }
}