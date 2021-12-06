using FS.Abp.Application.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.DataAnnotations;
using Microsoft.AspNetCore.Mvc.DataAnnotations.Internal;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.ModelBinding.Metadata;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Text;
using System.Linq;
using AutoFilterer.Types;
using AutoFilterer.Attributes;

namespace FS.Abp.AutoFilterer
{
    public class IgnoreFilterMetadataProvider : IMetadataDetailsProvider, IBindingMetadataProvider, Volo.Abp.DependencyInjection.ISingletonDependency
    {
        public void CreateBindingMetadata(BindingMetadataProviderContext context)
        {
            if (typeof(PaginationFilterBase).IsAssignableFrom(context.Key.ContainerType) ||
                typeof(FilterBase).IsAssignableFrom(context.Key.ContainerType))
            {
                var prop = TypeDescriptor.GetProperties(context.Key.ContainerType).Find(context.Key.Name, false);
                if (prop.Attributes.OfType<IgnoreFilterAttribute>().Count() > 0)
                {
                    context.BindingMetadata.IsBindingAllowed = false;
                }
            }
        }
    }


    public class AddIgnoreFilterMetadataProvider : IConfigureOptions<MvcOptions>
    {
        private readonly IgnoreFilterMetadataProvider _provider;

        public AddIgnoreFilterMetadataProvider(IgnoreFilterMetadataProvider provider)
        {
            _provider = provider;
        }

        public void Configure(MvcOptions options)
        {
            options.ModelMetadataDetailsProviders.Add(_provider);
        }
    }
}
