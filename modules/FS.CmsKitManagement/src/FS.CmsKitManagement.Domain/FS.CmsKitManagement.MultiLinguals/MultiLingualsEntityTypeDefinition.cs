using System;
using Volo.CmsKit;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace FS.CmsKitManagement.EntityTypes
{
    [Serializable]
    public class MultiLingualsEntityTypeDefinition : EntityTypeDefinition, IEquatable<MultiLingualsEntityTypeDefinition>
    {
        public record Property(string Name, string DataType) { }
        public string TranslationType { get; protected set; }
        public List<Property> Properties { get; protected set; }
        private MultiLingualsEntityTypeDefinition(System.Type entityType, System.Type translationType) : base(entityType.FullName)
        {
            TranslationType = translationType.FullName;
            Properties = translationType.GetProperties().Select(x => new Property(
                Name: x.Name,
                DataType: x.GetCustomAttributes<DataTypeAttribute>(true).FirstOrDefault()?.DataType.ToString() ?? DataType.Text.ToString()
                )).ToList();
        }
        public static MultiLingualsEntityTypeDefinition Create<TEntity, TTranslation>()
        {
            return new MultiLingualsEntityTypeDefinition(typeof(TEntity), typeof(TTranslation));
        }

        public bool Equals(MultiLingualsEntityTypeDefinition other)
        {
            return EntityType == other?.EntityType && TranslationType == other?.TranslationType;
        }
    }
}
