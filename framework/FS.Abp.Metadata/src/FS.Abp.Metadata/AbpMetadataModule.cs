using Microsoft.Extensions.DependencyInjection;
using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Volo.Abp.Modularity;
using Volo.Abp.Reflection;

namespace FS.Abp.Metadata
{
    [DependsOn(
        typeof(FS.Abp.Metadata.AbpMetadataCoreModule)
    )]
    [DependsOn(typeof(Volo.Abp.Swashbuckle.AbpSwashbuckleModule))]
    public class AbpMetadataModule : AbpModule
    {
        private void addMetadataProviders()
        {
            var metadataProviders = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(a => a.GetTypes())
                .Where(x => x.IsClass)
                .Where(x => ReflectionHelper.IsAssignableToGenericType(x, typeof(IMetadata<>)));

            metadataProviders.ToList().ForEach(type =>
            {
                var interfaceType = type.GetInterfaces().FirstOrDefault();

                var realType = interfaceType.GenericTypeArguments.FirstOrDefault();

                //AssociatedMetadataTypeTypeDescriptionProvider need netstandard2.1
                TypeDescriptor.AddProvider(new AssociatedMetadataTypeTypeDescriptionProvider(
                    realType, type), realType);
            });
        }
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            addMetadataProviders();
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.ConfigureSwaggerGen(option =>
            {
                option.SchemaFilter<SwaggerIgnoreFilter>();
            });
        }
    }
}
