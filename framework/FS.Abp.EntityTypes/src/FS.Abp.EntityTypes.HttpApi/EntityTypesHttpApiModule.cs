using Localization.Resources.AbpUi;
using FS.Abp.EntityTypes.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using FS.Abp.AspNetCore.Mvc.Json;
using System;
using System.Linq;
using Volo.Abp.Reflection;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace FS.Abp.EntityTypes
{
    [DependsOn(
        typeof(EntityTypesApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class EntityTypesHttpApiModule : AbpModule
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
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(EntityTypesHttpApiModule).Assembly);
            });

            addMetadataProviders();
        }



        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.TryAddEnumerable(ServiceDescriptor
                .Transient<IConfigureOptions<JsonOptions>, AbpJsonOptionsSetup>());

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<EntityTypesResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });

        }
    }
}
