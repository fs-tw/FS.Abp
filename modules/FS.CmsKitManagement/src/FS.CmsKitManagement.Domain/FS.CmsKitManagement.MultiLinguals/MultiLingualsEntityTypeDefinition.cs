using System;
using Volo.CmsKit;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Reflection;
using FS.Abp.EntityTypes;

namespace FS.CmsKitManagement.EntityTypes
{
    public class MultiLingualProperty
    {
        public string Name { get; set; }
        public string DataType => "string";
        public MultiLingualProperty(string name)
        {
            Name = name;
        }
    }

    [Serializable]
    public class MultiLingualsEntityTypeDefinition : FS.Abp.EntityTypes.EntityTypeDefinition, IEquatable<MultiLingualsEntityTypeDefinition>
    {
        public string TranslationType { get; protected set; }
        public List<MultiLingualProperty> Properties { get; protected set; }
        private MultiLingualsEntityTypeDefinition(System.Type entityType, System.Type translationType) : base(entityType.FullName)
        {
            TranslationType = translationType.FullName;
            Properties = translationType.GetProperties().Select(x => new MultiLingualProperty(x.Name)).ToList(); //EntityPropertyDefinition.CreateMany(translationType);
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
