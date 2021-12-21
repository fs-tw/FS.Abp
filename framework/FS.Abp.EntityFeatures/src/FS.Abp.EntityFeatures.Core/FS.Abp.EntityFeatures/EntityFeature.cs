using System.Collections.Generic;

namespace FS.Abp.EntityFeatures
{
    public class EntityFeature
    {
        public string Name { get; set; }
        public List<EntityFeatureDefinition> Definitions { get; set; }
    }

    public class EntityFeatureDefinition
    {
        public EntityFeatureDefinition(string entityType)
        {
            EntityType = entityType;
        }

        public string EntityType { get; protected set; }
    }
}
