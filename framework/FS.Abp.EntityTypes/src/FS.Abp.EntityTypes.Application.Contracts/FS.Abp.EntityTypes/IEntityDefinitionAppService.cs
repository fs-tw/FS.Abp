using System.Collections.Generic;

namespace FS.Abp.EntityTypes
{
    public interface IEntityDefinitionAppService
    {
        List<EntityDefinition> GetEntityDefinitionList();
    }
}