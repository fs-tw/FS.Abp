using System.Collections.Generic;

namespace FS.Entity.EntityFeatures
{
    public class EntityFeature
    {
        public string Name { get; set; }
        public List<EntityFeatureDefinition> Definitions { get; set; }
    }

    public abstract class EntityFeatureDefinition
    {
        public EntityFeatureDefinition(string entityType)
        {
            EntityType = entityType;
        }

        public EntityFeatureDefinition(System.Type type)
        {
            EntityType = type.FullName;
        }

        public string EntityType { get; protected set; }
    }
}
