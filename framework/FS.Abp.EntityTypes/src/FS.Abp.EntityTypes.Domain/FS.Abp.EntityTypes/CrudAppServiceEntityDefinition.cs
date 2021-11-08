using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;

namespace FS.Abp.EntityTypes
{
    public class DefaultEntityDefinition
    {
        public Type AppServiceType { get; set; }
        public Type EntityType { get; set; }
        public Type CreateType { get; set; }
        public Type UpdateType { get; set; }
        public Type SearchType { get; set; }
        public Type ListType { get; set; }
        public DefaultEntityDefinition() { }
        public DefaultEntityDefinition(Type appServiceType, Type entity, Type searchType, Type createType)
        {
            AppServiceType = appServiceType;
            EntityType = entity;
            SearchType = searchType;
            CreateType = createType;

        }

        public virtual List<EntityPropertyDefinition> CreateFormProps
        {
            get
            {
                var type = CreateType;
                return EntityPropertyDefinition.CreateMany(type);
            }
        }

        public virtual List<EntityPropertyDefinition> SearchFormProps
        {
            get
            {
                var type = SearchType;

                return EntityPropertyDefinition.CreateMany(type);
            }
        }
        public virtual List<EntityPropertyDefinition> ListProps
        {
            get
            {
                var type = ListType;

                return EntityPropertyDefinition.CreateMany(type);
            }
        }


        public static DefaultEntityDefinition Create<TAppServiceType, TEntity, TSearchType, TCreateType>()
        {
            return new DefaultEntityDefinition(typeof(TAppServiceType), typeof(TEntity), typeof(TSearchType), typeof(TCreateType));
        }

        public static DefaultEntityDefinition Create(Type appServiceType)
        {
            var result = new DefaultEntityDefinition()
            {
                AppServiceType = appServiceType,
                EntityType = appServiceType.GenericTypeArguments[0],
                UpdateType = appServiceType.GenericTypeArguments[appServiceType.GenericTypeArguments.Length - 1],
                CreateType = appServiceType.GenericTypeArguments[appServiceType.GenericTypeArguments.Length - 2],
                SearchType = appServiceType.GenericTypeArguments[appServiceType.GenericTypeArguments.Length - 3],
                ListType = appServiceType.GenericTypeArguments[appServiceType.GenericTypeArguments.Length - 5]
            };

            return result;
        }

        public static DefaultEntityDefinition CreateByAttribute<TAppServiceType>()
        {
            var attribute = TypeDescriptor.GetAttributes(typeof(TAppServiceType))
                .OfType<EntityDefinitionAttribute>()
                .Single();

            var result = new DefaultEntityDefinition()
            {
                AppServiceType = attribute.AppServiceType,
                EntityType = attribute.EntityType,
                UpdateType = attribute.UpdateType,
                CreateType = attribute.CreateType,
                SearchType = attribute.SearchType,
                ListType = attribute.ListType
            };

            return result;
        }
    }
}
