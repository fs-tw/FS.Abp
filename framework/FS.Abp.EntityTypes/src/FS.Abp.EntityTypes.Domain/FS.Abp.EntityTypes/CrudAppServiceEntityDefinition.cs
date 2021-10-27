using System;
using System.Collections.Generic;
using System.Linq;

namespace FS.Abp.EntityTypes
{
    public class DefaultEntityDefinition
    {
        public Type AppServiceType { get; set; }
        public Type Entity { get; set; }
        public Type CreateType { get; set; }
        public DefaultEntityDefinition() { }
        public DefaultEntityDefinition(System.Type appServiceType, Type entity, Type createType)
        {
            AppServiceType = appServiceType;
            Entity = entity;
            CreateType = createType;
        }

        public virtual List<EntityPropertyDefinition> CreateFormProps
        {
            get
            {
                var type = CreateType;

                var result = new Dictionary<string, EntityPropertyDefinition>();

                var targetProperties = type.GetProperties().Select(p => p.Name)
                    .Except(typeof(Volo.Abp.Domain.Entities.Auditing.FullAuditedAggregateRoot).GetProperties().Select(y => y.Name))
                    .Except(typeof(Volo.Abp.MultiTenancy.IMultiTenant).GetProperties().Select(y => y.Name))
                    .ToList();

                return type.GetProperties()
                .Where(x => targetProperties.Contains(x.Name))
                .Select(p =>
                {
                    var propertyName = p.Name.ToCamelCase();
                    var item = new EntityPropertyDefinition()
                    {
                        Id = propertyName,
                        DisplayName = propertyName,
                        Name = propertyName,
                        Type = convertToePropType(p.PropertyType)
                    };
                    return item;

                }).ToList();
            }
        }
        public static DefaultEntityDefinition Create<TAppServiceType, TEntity, TCreateType>()
        {
            return new DefaultEntityDefinition(typeof(TAppServiceType), typeof(TEntity), typeof(TCreateType));
        }

        public static DefaultEntityDefinition Create(Type appServiceType)
        {
            var result = new DefaultEntityDefinition()
            {
                AppServiceType = appServiceType,
                Entity = appServiceType.GenericTypeArguments[0],
                CreateType = appServiceType.GenericTypeArguments[appServiceType.GenericTypeArguments.Length - 2]
            };

            return result;
        }

        private string convertToePropType(Type type)
        {
            IReadOnlyDictionary<TypeCode, string> typeCodeToTypeMap = new Dictionary<TypeCode, string>
            {
                { TypeCode.Boolean, "boolean" },
                //{ TypeCode.Byte, typeof(byte) },
                //{ TypeCode.Char, typeof(char) },
                { TypeCode.DateTime, "dateTime" },
                //{ TypeCode.DBNull, typeof(DBNull) },
                { TypeCode.Decimal, "number" },
                { TypeCode.Double, "number" },
                //{ TypeCode.Empty, null },
                { TypeCode.Int16, "number" },
                { TypeCode.Int32, "number"},
                { TypeCode.Int64, "number" },
                //{ TypeCode.Object, typeof(object) },
                //{ TypeCode.SByte, typeof(sbyte) },
                { TypeCode.Single, "number" },
                { TypeCode.String, "string" },
                { TypeCode.UInt16, "number" },
                { TypeCode.UInt32, "number" },
                { TypeCode.UInt64, "number" }
            };
            var typeCode = Type.GetTypeCode(type);
            if (typeCodeToTypeMap.ContainsKey(typeCode))
                return typeCodeToTypeMap[Type.GetTypeCode(type)];
            else
                return "string";
        }
    }
}
