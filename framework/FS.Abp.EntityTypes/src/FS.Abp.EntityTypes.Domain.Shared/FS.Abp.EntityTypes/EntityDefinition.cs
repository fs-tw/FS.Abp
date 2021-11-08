using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;

namespace FS.Abp.EntityTypes
{
    public class EntityDefinition
    {

        private Type _appServiceType;
        private Type _entityType;
        private Type _createType;
        private Type _updateType;
        private Type _searchType;
        private Type _listType;

        public string Name { get { return this.AppServiceType; } }
        public string AppServiceType { get { return _appServiceType.FullName; } }
        public string EntityType { get { return _entityType.FullName; } }
        public string CreateType { get { return _createType.FullName; } }
        public string UpdateType { get { return _updateType.FullName; } }
        public string SearchType { get { return _searchType.FullName; } }
        public string ListType { get { return _listType.FullName; } }

        public EntityDefinition() { }
        public EntityDefinition(Type appServiceType, Type entity, Type searchType, Type createType)
        {
            _appServiceType = appServiceType;
            _entityType = entity;
            _searchType = searchType;
            _createType = createType;

        }

        public virtual List<EntityPropertyDefinition> CreateFormProps
        {
            get
            {
                return EntityPropertyDefinition.CreateMany(_createType);
            }
        }

        public virtual List<EntityPropertyDefinition> UpdateFormProps
        {
            get
            {
                return EntityPropertyDefinition.CreateMany(_updateType);
            }
        }

        public virtual List<EntityPropertyDefinition> SearchFormProps
        {
            get
            {
                return EntityPropertyDefinition.CreateMany(_searchType);
            }
        }
        public virtual List<EntityPropertyDefinition> ListProps
        {
            get
            {
                return EntityPropertyDefinition.CreateMany(_listType);
            }
        }


        public static EntityDefinition Create<TAppServiceType, TEntity, TSearchType, TCreateType>()
        {
            return new EntityDefinition(typeof(TAppServiceType), typeof(TEntity), typeof(TSearchType), typeof(TCreateType));
        }

        public static EntityDefinition Create(Type appServiceType)
        {
            var result = new EntityDefinition()
            {
                _appServiceType = appServiceType,
                _entityType = appServiceType.GenericTypeArguments[0],
                _updateType = appServiceType.GenericTypeArguments[appServiceType.GenericTypeArguments.Length - 1],
                _createType = appServiceType.GenericTypeArguments[appServiceType.GenericTypeArguments.Length - 2],
                _searchType = appServiceType.GenericTypeArguments[appServiceType.GenericTypeArguments.Length - 3],
                _listType = appServiceType.GenericTypeArguments[appServiceType.GenericTypeArguments.Length - 5]
            };

            return result;
        }

        public static EntityDefinition CreateByAttribute<TAppServiceType>()
        {
            var attribute = TypeDescriptor.GetAttributes(typeof(TAppServiceType))
                .OfType<EntityDefinitionAttribute>()
                .Single();

            var result = new EntityDefinition()
            {
                _appServiceType = attribute.AppServiceType,
                _entityType = attribute.EntityType,
                _updateType = attribute.UpdateType,
                _createType = attribute.CreateType,
                _searchType = attribute.SearchType,
                _listType = attribute.ListType
            };

            return result;
        }

    }
}
