using System;
using Volo.CmsKit;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Reflection;
using FS.Abp.EntityTypes;

namespace FS.CmsKitManagement.EntityTypes
{
    [Serializable]
    public class MultiLingualsEntityTypeDefinition : FS.Abp.EntityTypes.EntityTypeDefinition, IEquatable<MultiLingualsEntityTypeDefinition>
    {
        public string TranslationType { get; protected set; }
        //public List<EntityPropertyDefinition> Properties { get; protected set; }
        private MultiLingualsEntityTypeDefinition(System.Type entityType, System.Type translationType) : base(entityType.FullName)
        {
            TranslationType = translationType.FullName;
            //Properties = EntityPropertyDefinition.CreateMany(translationType);
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
