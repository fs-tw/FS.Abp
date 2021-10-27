using System.Collections.Generic;

namespace FS.Abp.EntityTypes
{
    public interface IEntityTypeDefinitionAppService
    {
        List<EntityType> GetEntityTypeDefinitionList();
    }
}