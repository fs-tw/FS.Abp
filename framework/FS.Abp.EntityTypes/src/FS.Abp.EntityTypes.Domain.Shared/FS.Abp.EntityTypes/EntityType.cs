using System.Collections.Generic;
using Volo.CmsKit;

namespace FS.Abp.EntityTypes
{
    public class EntityType
    {
        public string Name { get; set; }
        public List<EntityTypeDefinition> Definitions { get; set; }
    }
}
