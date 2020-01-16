using JsonSubTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Microsoft.Extensions.DependencyInjection
{
    public static partial class IServiceCollectionExtensions
    {
        public static void AddJsonSubtypesConverterBuilder<TModule>(this IServiceCollection services)
        {
            services.Configure<Microsoft.AspNetCore.Mvc.MvcNewtonsoftJsonOptions>(options =>
            {
                var converterTypes = typeof(TModule).Assembly
                    .DefinedTypes
                    .Where(type => typeof(IJsonSubtypesConverterBuilders).IsAssignableFrom(type) && !type.IsAbstract && !type.IsGenericType);

                converterTypes.ToList().ForEach(converterType =>
                {
                    ((IJsonSubtypesConverterBuilders)Activator.CreateInstance(converterType)).JsonConverters.ForEach(jsonConverter =>
                    {
                        options.SerializerSettings.Converters.Add(jsonConverter);
                    });
                });
            });
        }
    }
}