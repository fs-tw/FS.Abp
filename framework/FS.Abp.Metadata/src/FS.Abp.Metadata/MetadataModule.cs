using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Abp.Metadata.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;
using System;
using System.Linq;
using Volo.Abp.Reflection;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace FS.Abp.Metadata
{
    [DependsOn(
        typeof(FS.Abp.Metadata.MetadataAbstractionsModule)
    )]
    public class MetadataModule : AbpModule
    {
        private void addMetadataProviders()
        {
            var metadataProviders = AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(a => a.GetTypes())
                .Where(x => x.IsClass)
                .Where(x => ReflectionHelper.IsAssignableToGenericType(x, typeof(IMetadataProvider<>)));

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
    }
}
