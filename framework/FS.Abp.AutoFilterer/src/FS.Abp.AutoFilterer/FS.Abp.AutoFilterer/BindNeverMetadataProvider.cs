using AutoFilterer.Types;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.ModelBinding.Metadata;
using Microsoft.Extensions.Options;
using System.ComponentModel;
using System.Linq;

namespace FS.Abp.AutoFilterer
{
    public class BindNeverMetadataProvider : IMetadataDetailsProvider, IBindingMetadataProvider, Volo.Abp.DependencyInjection.ISingletonDependency
    {
        public void CreateBindingMetadata(BindingMetadataProviderContext context)
        {
            if (typeof(PaginationFilterBase).IsAssignableFrom(context.Key.ContainerType) ||
                typeof(FilterBase).IsAssignableFrom(context.Key.ContainerType))
            {
                var prop = TypeDescriptor.GetProperties(context.Key.ContainerType).Find(context.Key.Name, false);
                if (prop.Attributes.OfType<BindNeverAttribute>().Count() > 0)
                {
                    context.BindingMetadata.IsBindingAllowed = false;
                }
            }
        }
    }


    public class BindNeverMetadataProviderConfigureOptions : IConfigureOptions<MvcOptions>
    {
        private readonly BindNeverMetadataProvider _provider;

        public BindNeverMetadataProviderConfigureOptions(BindNeverMetadataProvider provider)
        {
            _provider = provider;
        }

        public void Configure(MvcOptions options)
        {
            options.ModelMetadataDetailsProviders.Add(_provider);
        }
    }
}
