using System.Collections.Generic;

namespace FS.Abp.EntityTypes
{
    public class EntityType
    {
        public string Name { get; set; }
        public List<EntityTypeDefinition> Definitions { get; set; }
    }

    public class EntityTypeDefinition
    {
        public EntityTypeDefinition(string entityType)
        {
            EntityType = entityType;
        }

        public string EntityType { get; protected set; }
    }
}
