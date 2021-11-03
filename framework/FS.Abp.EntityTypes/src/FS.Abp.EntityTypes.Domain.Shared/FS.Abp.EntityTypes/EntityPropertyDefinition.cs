using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using Volo.Abp.Collections;

namespace FS.Abp.EntityTypes
{
    public class EntityPropertyDefinition
    {

        private static TypeList _ignoreType { get; set; } = new TypeList()
        {
            typeof(Volo.Abp.Domain.Entities.Auditing.FullAuditedAggregateRoot),
            typeof(Volo.Abp.MultiTenancy.IMultiTenant),
            typeof(FS.Abp.Application.Dtos.SearchResultRequestDto)
        };
        public string Type { get; set; }
        public string Id { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string Permission { get; set; }
        public bool Sortable { get; set; }
        public int ColumnWidth { get; set; }
        public bool Visible { get; set; }

        public static List<EntityPropertyDefinition> CreateMany(Type type, params Type[] ignoreTypes)
        {
            if (type == null) return null;
            var result = new Dictionary<string, EntityPropertyDefinition>();
            var targetProperties = type.GetProperties().Select(p => p.Name);

            _ignoreType.Concat(ignoreTypes).ToList().ForEach(t =>
            {
                targetProperties = targetProperties.Except(t.GetProperties().Select(y => y.Name));
            });

            return type.GetProperties()
            .Where(x => targetProperties.Contains(x.Name))
            .Select(p =>
            {
                var attribute = TypeDescriptor.GetProperties(p.ReflectedType).Find(p.Name, false)?.Attributes?.OfType<EntityPropertyDefinitionAttribute>()?.SingleOrDefault();

                var propertyName = p.Name.ToCamelCase();
                var item = new EntityPropertyDefinition()
                {
                    Id = propertyName,
                    DisplayName = attribute?.DisplayName ?? propertyName,
                    Name = attribute?.Name ?? propertyName,
                    Type = attribute?.Type ?? convertToPropType(p.PropertyType),
                    Visible = attribute == null ? true : attribute.Visible
                };
                return item;


            }).ToList();
        }
        private static string convertToPropType(Type type)
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
            var typeCode = System.Type.GetTypeCode(type);
            if (typeCodeToTypeMap.ContainsKey(typeCode))
                return typeCodeToTypeMap[System.Type.GetTypeCode(type)];
            else
                return "string";
        }
    }
}
