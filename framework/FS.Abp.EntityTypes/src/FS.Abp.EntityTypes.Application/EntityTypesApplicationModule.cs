using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;
using System;
using Volo.Abp.Reflection;
using System.Linq;
using System.ComponentModel;

namespace FS.Abp.EntityTypes
{
    [DependsOn(
        typeof(EntityTypesDomainModule),
        typeof(EntityTypesApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    public class EntityTypesApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {            

            context.Services.AddAutoMapperObjectMapper<EntityTypesApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<EntityTypesApplicationModule>(validate: true);
            });

            //Volo.Abp.Collections.TypeList list = new Volo.Abp.Collections.TypeList();
            //Volo.Abp.Collections.TypeList other = new Volo.Abp.Collections.TypeList();

            //context.Services.OnRegistred(context =>
            //{
            //    Type searchType = null;
            //    Type targetType = null;
            //    if (ReflectionHelper.IsAssignableToGenericType(
            //        context.ImplementationType,
            //        searchType = typeof(Volo.Abp.Application.Services.AbstractKeyCrudAppService<,,,,,,>)))
            //    {
            //        targetType = ReflectionHelper.GetImplementedGenericTypes(context.ImplementationType, searchType).FirstOrDefault();
            //    }
            //    else if (ReflectionHelper.IsAssignableToGenericType(
            //        context.ImplementationType,
            //        searchType = typeof(Volo.Abp.Application.Services.CrudAppService<,,,,,,>)))
            //    {
            //        targetType = ReflectionHelper.GetImplementedGenericTypes(context.ImplementationType, searchType).FirstOrDefault();
            //    }
            //    else if (ReflectionHelper.IsAssignableToGenericType(
            //        context.ImplementationType,
            //        searchType = typeof(Volo.Abp.Application.Services.ICrudAppService<,,,,,>)))
            //    {
            //        if (!other.Contains(context.ImplementationType))
            //            other.Add(context.ImplementationType);
            //    }


            //    if (targetType != null && !list.Contains(targetType))
            //        list.Add(targetType);
            //});

            //Configure<EntityDefinitionOptions>(o =>
            //{
            //    var options = list.Select(a =>
            //    {
            //        var entityDefinition = DefaultEntityDefinition.Create(a);
            //        return (type: entityDefinition.Entity, value: entityDefinition);
            //    }).ToArray();

            //    o.AddOrReplace(options);
            //    o.Other = other;
            //});
        }
    }
}
